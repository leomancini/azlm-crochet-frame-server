import express from "express";
import cors from "cors";

const app = express();
const port = 3102;

app.use(cors());

app.get("/", (req, res) => {
  try {
    const data = {
      num_sparkles: 100,
      frame_rate: 60,
      transition_time: 1,
      sparkle_size: 3,
      num_palettes: 1
    };

    res.json(data);
  } catch (error) {
    console.error("Error sending response:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`HTTP Server is running at http://localhost:${port}`);
});
