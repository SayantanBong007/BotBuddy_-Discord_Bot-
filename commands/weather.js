// weather.js

import axios from "axios";

// Function to execute the weather command
export async function execute(message, args) {
  try {
    // Check if user provided a location
    if (args.length !== 1) {
      message.reply("Please provide a location.");
      return;
    }

    const location = args[0];

    // Fetch weather information from an API (replace API_URL with the actual API URL)
    const response = await axios.get(`API_URL?location=${location}`);

    // Check if API request was successful
    if (response.status !== 200) {
      message.reply(
        "Failed to fetch weather information. Please try again later."
      );
      return;
    }

    const weatherData = response.data;

    // Extract relevant weather information (replace with actual fields returned by the API)
    const temperature = weatherData.main.temp;
    const description = weatherData.weather[0].description;

    message.reply(
      `Weather in ${location}: ${description}, Temperature: ${temperature}°C`
    );
  } catch (error) {
    console.error("Error fetching weather:", error);
    message.reply(
      "An error occurred while fetching weather information. Please try again later."
    );
  }
}
