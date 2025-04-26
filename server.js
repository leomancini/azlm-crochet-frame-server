import express from "express";
import cors from "cors";
import { colors } from "./colors.js";
import { modes } from "./modes.js";

const app = express();
const port = 3102;

app.use(cors());

app.get("/", (req, res) => {
  try {
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET");
    res.setHeader("Cache-Control", "no-cache");

    const currentMode = modes.SPARKLES;

    const data = {
      mode: currentMode.name,
      num_sparkles: 500,
      frame_rate: 30,
      transition_time: 5,
      sparkle_size: 4,
      num_palettes: 5
    };

    console.log("Sending response:", data);
    res.json(data);
  } catch (error) {
    console.error("Error sending response:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`HTTP Server is running at http://localhost:${port}`);
});
