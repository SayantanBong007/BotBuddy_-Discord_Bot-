// quote.js

import axios from "axios";

export async function execute(message) {
  try {
    const response = await axios.get("https://api.quotable.io/random");
    const { content, author } = response.data;
    message.reply({
      content: `*${content}* - ${author}`,
    });
  } catch (error) {
    console.error("Error fetching quote:", error);
    message.reply({
      content: "Sorry, an error occurred while fetching the quote.",
    });
  }
}
