import axios from "axios";

// Function to execute the dictionary command
export async function execute(message, args) {
  try {
    const word = args[0];

    // Fetch word definition and synonyms from Words API
    const response = await axios.get(
      `https://wordsapiv1.p.mashape.com/words/${word}/definitions`,
      {
        headers: {
          "x-rapidapi-key":
            "2e27f5cf2dmsh546b3de5e6bd69fp181cbejsn92b5e4a3489b",
          "x-rapidapi-host": "wordsapiv1.p.mashape.com",
        },
      }
    );

    const data = response.data;

    // Extract definition and synonyms from the API response
    const definitions = data.results.map((result) => {
      return `${result.partOfSpeech}: ${
        result.definition
      }\nSynonyms: ${result.synonyms.join(", ")}`;
    });

    // Reply to the user with the definitions
    message.reply(`Definitions of '${word}':\n${definitions.join("\n\n")}`);
  } catch (error) {
    console.error("Error fetching dictionary data:", error);
    message.reply(
      "An error occurred while fetching dictionary data. Please try again later."
    );
  }
}
