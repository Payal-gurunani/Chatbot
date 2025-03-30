import axios from "axios";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

export const chatWithAI = async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) return res.status(400).json({ error: "Message is required" });

    // Send message to Google's Gemini API (PaLM 2)
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateMessage?key=${process.env.GOOGLE_AI_API_KEY}`,
      {
        contents: [{ role: "user", parts: [{ text: message }] }],
      }
    );

    const botReply = response.data.candidates?.[0]?.content || "I'm not sure how to respond.";

    res.json({ botReply });
  } catch (error) {
    console.error("Error in chatWithAI:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
