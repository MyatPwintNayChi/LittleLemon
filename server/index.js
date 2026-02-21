import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
const PORT = 5000;

// ✅ CORS (Express 5 safe setup)
app.use(cors());

// ✅ Middleware
app.use(express.json());

// ✅ OpenAI Setup
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// ✅ Test Route (optional but useful)
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// ✅ Chat Route
app.post("/api/chat", async (req, res) => {
  console.log("API KEY:", process.env.OPENAI_API_KEY);

  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ reply: "Message is required." });
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `
You are a helpful assistant for Little Lemon restaurant.
Only answer questions related to:
- Opening hours
- Location
- Menu
- Reservations
- Events
- Contact information

If question is unrelated, politely redirect to restaurant topics.
`,
        },
        { role: "user", content: message },
      ],
    });

    res.json({
      reply: completion.choices[0].message.content,
    });
  } catch (error) {
    console.error("OpenAI Error:", error);
    res.status(500).json({
      reply: "Something went wrong on the server.",
    });
  }
});

// ✅ Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
