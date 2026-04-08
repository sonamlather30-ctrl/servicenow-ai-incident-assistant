const axios = require("axios");

const API_KEY = "your_api_key_here";

async function getAISummary(incident) {
  try {
    if (!incident) {
      console.log("No incident provided");
      return;
    }

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

    const aiText = response.data.choices[0].message.content;

    console.log("AI Output:\n", aiText);

  } catch (error) {
    console.error("API Error:", error.response?.data || error.message);
  }
}

// Test
getAISummary("VPN not working, authentication failed");
