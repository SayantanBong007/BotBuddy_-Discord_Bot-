// currency.js

import axios from "axios";

// Function to execute the currency conversion command
export async function execute(message, args) {
  try {
    // Check if user provided both source and target currencies
    if (args.length !== 3) {
      message.reply(
        "Please provide the source currency, target currency, and amount to convert."
      );
      return;
    }

    const [sourceCurrency, targetCurrency, amount] = args;
    const amountValue = parseFloat(amount);

    // Check if amount provided is a valid number
    if (isNaN(amountValue)) {
      message.reply("Invalid amount. Please provide a valid number.");
      return;
    }

    // Fetch exchange rates from an API (replace API_URL with the actual API URL)
    const response = await axios.get(
      `API_URL?source=${sourceCurrency}&target=${targetCurrency}`
    );

    // Check if API request was successful
    if (response.status !== 200) {
      message.reply("Failed to fetch exchange rates. Please try again later.");
      return;
    }

    const rate = response.data.rate;
    const convertedAmount = amountValue * rate;

    message.reply(
      `Converted ${amountValue} ${sourceCurrency} to ${convertedAmount.toFixed(
        2
      )} ${targetCurrency}.`
    );
  } catch (error) {
    console.error("Error converting currency:", error);
    message.reply(
      "An error occurred while converting currency. Please try again later."
    );
  }
}
