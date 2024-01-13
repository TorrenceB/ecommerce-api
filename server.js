import express from "express";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;
const __dirname = path.resolve();

app.use(express.static(path.join(__dirname)));

app.get("/", (req, res) => {
  res.send(path.join(__dirname, "index.html"));
});

app.listen(port, () => console.log(`Server running at port ${port}`));
