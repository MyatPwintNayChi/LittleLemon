import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  }),
);

app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// app.post("/api/chat", async (req, res) => {
//   try {
//     const { message } = req.body;

//     const response = await openai.chat.completions.create({
//       model: "gpt-4o-mini",
//       messages: [
//         {
//           role: "system",
//           content: `
// You are a helpful assistant for Little Lemon restaurant.
// Only answer questions related to:
// - Opening hours
// - Location
// - Menu
// - Reservations
// - Events
// - Contact information

// If question is unrelated, politely redirect to restaurant topics.
// `,
//         },
//         { role: "user", content: message },
//       ],
//     });

//     res.json({ reply: response.choices[0].message.content });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ reply: "Something went wrong." });
//   }
// });
app.post("/api/chat", async (req, res) => {
  res.json({ reply: "Backend works properly!" });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
