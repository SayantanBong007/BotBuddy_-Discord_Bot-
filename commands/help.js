// help.js

// Function to execute the help command
export function execute(message, commands) {
  const commandList = commands
    .map((cmd) => `${cmd.name}: ${cmd.description}`)
    .join("\n");

  const usageExamples = {
    quote: "!quote",
    weather: "!weather New York",
    currency: "!currency USD EUR",
    dictionary: "!dictionary word",
    joke: "!joke",
    wikipedia: "!wikipedia search term",
    // Add usage examples for other commands here
  };

  const helpMessage = `Available commands:\n${commandList}\n\nUsage examples:\n${Object.entries(
    usageExamples
  )
    .map(([cmd, usage]) => `${cmd}: ${usage}`)
    .join("\n")}`;

  message.reply(helpMessage);
}
