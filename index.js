// index.js

import { Client, GatewayIntentBits } from "discord.js";
import dotenv from "dotenv";
import * as quoteCommand from "./commands/quote.js";
import * as weatherCommand from "./commands/weather.js";
import * as currencyCommand from "./commands/currency.js";
import * as helpCommand from "./commands/help.js";
import * as dictionaryCommand from "./commands/dictionary.js";
import * as jokeCommand from "./commands/joke.js";
import * as wikipediaCommand from "./commands/wikipedia.js";

dotenv.config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

// List of available commands and their descriptions
const commands = [
  { name: "quote", description: "Fetches a random quote" },
  {
    name: "weather",
    description: "Provides weather forecast for a specified location",
  },
  { name: "currency", description: "Converts between different currencies" },
  {
    name: "dictionary",
    description: "Look up definitions or synonyms for words",
  },
  { name: "joke", description: "Fetches a random joke" },
  {
    name: "wikipedia",
    description: "Search for articles on Wikipedia and retrieve summaries",
  },
  // Add descriptions for other commands here
];

client.on("messageCreate", (message) => {
  if (message.author.bot) return;

  // Command prefix
  const prefix = "!";

  // Split message content to get command and arguments
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  // Handle different commands
  switch (command) {
    case "quote":
      quoteCommand.execute(message);
      break;
    case "weather":
      weatherCommand.execute(message, args); // Pass arguments to weather command
      break;
    case "currency":
      currencyCommand.execute(message, args); // Pass arguments to currency command
      break;
    case "dictionary":
      dictionaryCommand.execute(message, args); // Pass arguments to dictionary command
      break;
    case "joke":
      jokeCommand.execute(message); // No arguments needed for joke command
      break;
    case "wikipedia":
      wikipediaCommand.execute(message, args); // Pass arguments to wikipedia command
      break;
    case "help":
      helpCommand.execute(message, commands); // Pass the list of commands to the help command
      break;
    // Add more commands here
    default:
      // If command is not recognized, do nothing
      break;
  }
});

client.login(process.env.TOKEN);
