import express from "express";
import cors from "cors";

const app = express();
const port = 3102;

// Enable CORS for all routes
app.use(cors());

app.get("/", (req, res) => {
  try {
    res.setHeader("Content-Type", "application/json");
    res.json({
      company: "OFC",
      founded: 2022,
      fun: true,
      primes: [2, 3, 5],
      pi: 3.14,
      mixed: [false, null, 3, true, 2.7, "cheese"]
    });
  } catch (error) {
    console.error("Error sending response:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
