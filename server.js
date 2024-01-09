import express from "express";
import path from "path";

const app = express();
const port = 80;
const __dirname = path.resolve();

app.use(express.static(path.join(__dirname)));

app.get("/", (req, res) => {
  res.send(path.join(__dirname, "index.html"));
});

app.listen(port, () => console.log(`Server running @port ${port}`));
