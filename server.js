import express from "express";
import cors from "cors";

const app = express();
const port = 3102;

// Enable CORS for all routes
app.use(cors());

app.get("/", (req, res) => {
  try {
    console.log("Received request from:", req.ip);

    // Set additional headers that might help with the connection
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET");
    res.setHeader("Cache-Control", "no-cache");

    const data = [
      {
        label: "company",
        value: "OFC",
        color: 0x00ff00 // Green
      },
      {
        label: "founded",
        value: 2022,
        color: 0xff00ff // Yellow
      }
    ];

    console.log("Sending response:", data);
    res.json(data);
  } catch (error) {
    console.error("Error sending response:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Start HTTP server
app.listen(port, () => {
  console.log(`HTTP Server is running at http://localhost:${port}`);
});
