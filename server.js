import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3102;

// API Key middleware
const apiKeyMiddleware = (req, res, next) => {
  const apiKey = req.query.apiKey;

  if (!apiKey || apiKey !== process.env.API_KEY) {
    return res
      .status(401)
      .json({ error: "Unauthorized: Invalid or missing API key" });
  }

  next();
};

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

// Apply API key middleware to API routes
app.use("/api", apiKeyMiddleware);

let data = {
  num_sparkles: 100,
  sparkle_size: 1,
  speed: 10,
  colors: [
    16711680, // Red
    16744448, // Orange
    16776960, // Yellow
    65280, // Green
    65535, // Cyan
    255, // Blue
    8388863, // Purple
    16711935, // Magenta
    16777215, // White
    16761024, // Light Pink
    12648384, // Light Green
    12632319 // Light Blue
  ]
};

app.get("/api/settings", (req, res) => {
  try {
    res.json(data);
  } catch (error) {
    console.error("Error sending response:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/api/settings", (req, res) => {
  try {
    console.log("Received POST request with body:", req.body);

    if (!req.body || typeof req.body !== "object") {
      console.error("Invalid request body:", req.body);
      return res.status(400).json({ error: "Invalid request body" });
    }

    const updatedData = { ...data, ...req.body };
    console.log("Updated data:", updatedData);

    data = updatedData;

    res.json(data);
  } catch (error) {
    console.error("Error updating data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`HTTP Server is running at http://localhost:${port}`);
});
