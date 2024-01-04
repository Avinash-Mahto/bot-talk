const express = require('express');
const axios = require('axios');
const readline = require('readline');
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));


const userInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Replace 'YOUR_OPENAI_API_KEY' with your actual OpenAI API key
const openaiApiKey = process.env.OPENAI_API_KEY;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/ask', async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await axios.post('https://api.openai.com/v1/completions', {
      model: 'text-davinci-003',
      prompt: prompt,
      max_tokens: 150,
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${openaiApiKey}`,
      },
    });

    const answer = response.data.choices[0].text.trim();
    res.json({ answer });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on http://0.0.0.0:${port}`);
});

userInterface.close();

