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

    const data = {
      company: {
        value: "OFC",
        color: 0x00ff00 // Green
      },
      founded: {
        value: 2022,
        color: 0xffff00 // Yellow
      },
      fun: {
        value: true,
        color: 0xff00ff // Magenta
      },
      primes: {
        value: [2, 3, 5],
        color: 0xff8000 // Orange
      },
      pi: {
        value: 3.14,
        color: 0x00ffff // Cyan
      },
      mixed: {
        value: [false, null, 3, true, 2.7, "cheese"],
        color: 0x0080ff // Light blue
      }
    };

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
