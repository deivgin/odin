import express from "express";
import libraryRouter from "./routes/library";
import path from "node:path";

const app = express();
const port = 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use("/api", libraryRouter);

app.get("/", (req, res) => {
  res.render("index", { title: "Hey", message: "Hello there!" });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
