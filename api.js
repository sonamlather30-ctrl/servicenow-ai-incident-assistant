const axios = require("axios");

const API_KEY = "your_api_key_here";

async function getAISummary(incident) {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4",
        messages: [
          {
            role: "user",
            content: `Summarize and suggest solution: ${incident}`,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const result = response.data.choices[0].message.content;
    console.log("AI Response:\n", result);

  } catch (error) {
    console.error("Error:", error.message);
  }
}

// Test
getAISummary("User unable to access VPN, authentication failed.");
