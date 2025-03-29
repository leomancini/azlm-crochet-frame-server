import express from "express";

const app = express();
const port = 3102;

app.get("/", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.json({
    company: "OFC",
    founded: 2022,
    fun: true,
    primes: [2, 3, 5],
    pi: 3.14,
    mixed: [false, null, 3, true, 2.7, "cheese"]
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
