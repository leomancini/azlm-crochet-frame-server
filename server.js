import express from "express";
import cors from "cors";
import { colors } from "./colors.js";

const app = express();
const port = 3102;

app.use(cors());

app.get("/", (req, res) => {
  try {
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET");
    res.setHeader("Cache-Control", "no-cache");

    const data = [
      {
        label: "Testing",
        value: "Leo",
        color: colors.purple
      },
      {
        label: "Testing 2",
        value: "Alicia",
        color: colors.red
      }
    ];

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
