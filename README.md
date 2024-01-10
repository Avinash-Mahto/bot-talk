# bot-talk

# BotTalk: NodeJS Chatbot

BotTalk is a simple chatbot application built with Node.js and OpenAI API. It allows users to interact with a chatbot powered by OpenAI's text-davinci-003 model.

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/bot-talk.git

2. Navigate to the project directory:Create a .env file in the root of the project and add your OpenAI API key:
   ```bash
   cd bot-talk
3. Install dependencies:
   ```bash
   npm install
4. Create a .env file in the root of the project and add your OpenAI API key:
   ```bash
   OPENAI_API_KEY=your_actual_api_key

### Usage   
1. Start the server:
   ```bash
   node index.js  ## for Text based model  ( ex: text-davinici-003 )
   node gpt-3.5-models.js ##For chat models models ( ex: GPT-3.5* models )
2. Open your web browser and go to http://localhost:4000.
3. Enter a prompt in the provided input field and click the "Ask" button to interact with the chatbot.
   

## Running the Application with Docker

To run the application as a Docker container, follow these steps:

### 1. Build the Docker Image

Navigate to the root directory of your project in the terminal and run the following command to build the Docker image:

```bash
docker build -t your-image-name .
