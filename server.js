import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3102;

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

// Initial data state
let data = {
  num_sparkles: 100,
  frame_rate: 60,
  speed: 10,
  sparkle_size: 1,
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

// Color mapping for reference
const COLOR_VALUES = {
  red: 0xff0000,
  orange: 0xff8000,
  yellow: 0xffff00,
  green: 0x00ff00,
  cyan: 0x00ffff,
  blue: 0x0000ff,
  purple: 0x8000ff,
  magenta: 0xff00ff,
  white: 0xffffff,
  lightPink: 0xffc0c0,
  lightGreen: 0xc0ffc0,
  lightBlue: 0xc0c0ff
};

// Serve index.html for the root path
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// API routes
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

    // Validate the request body
    if (!req.body || typeof req.body !== "object") {
      console.error("Invalid request body:", req.body);
      return res.status(400).json({ error: "Invalid request body" });
    }

    // Update data with new values
    const updatedData = { ...data, ...req.body };
    console.log("Updated data:", updatedData);

    // Update the data state
    data = updatedData;

    // Send the updated data back
    res.json(data);
  } catch (error) {
    console.error("Error updating data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`HTTP Server is running at http://localhost:${port}`);
});
