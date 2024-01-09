import express from "express";
import path from "path";

const app = express();
const port = 80;

app.get("/", (req, res) => {
  const __dirname = path.resolve();

  res.send(path.join(__dirname, "index.html"));
});

app.listen(port, () => console.log(`Server running @port ${port}`));
