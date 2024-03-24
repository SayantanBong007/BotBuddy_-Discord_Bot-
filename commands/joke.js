// joke.js

import axios from "axios";

// Function to execute the joke command
export async function execute(message, args) {
  try {
    // Fetch a random joke from JokeAPI
    const response = await axios.get(
      "https://v2.jokeapi.dev/joke/Any?type=single"
    );

    const joke = response.data.joke;

    message.reply(`Here's a joke for you: ${joke}`);
  } catch (error) {
    console.error("Error fetching joke data:", error);
    message.reply(
      "An error occurred while fetching joke data. Please try again later."
    );
  }
}
