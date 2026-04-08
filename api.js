const axios = require("axios");

const API_KEY = "your_api_key_here";

async function getAISummary(incident) {
  try {
    // Validate input
    if (!incident || incident.trim() === "") {
      console.log("❌ No incident description provided");
      return;
    }

    console.log("📩 Sending incident to AI...\n");

    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4",
        messages: [
          {
            role: "user",
            content: `You are an IT support assistant.
Summarize the issue in 1-2 lines and suggest a clear resolution.

Incident: ${incident}`,
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

    console.log("===== ✅ AI RESULT =====");
    console.log(aiText);
    console.log("========================");

  } catch (error) {
    console.error("❌ API Error:", error.response?.data || error.message);
  }
}

// Test input
getAISummary("User unable to login to VPN, authentication failed");
