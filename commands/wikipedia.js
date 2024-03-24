// wikipedia.js

import axios from "axios";

// Function to execute the wikipedia command
export async function execute(message, args) {
  try {
    const query = args.join(" ");

    // Fetch Wikipedia summary for the query
    const response = await axios.get(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${query}`
    );

    const summary = response.data.extract;

    message.reply(`Wikipedia summary for "${query}": ${summary}`);
  } catch (error) {
    console.error("Error fetching Wikipedia data:", error);
    message.reply(
      "An error occurred while fetching Wikipedia data. Please try again later."
    );
  }
}
