import express from "express";
import libraryRouter from "./routes/library";
import { libraryController } from "./controller/library.controller";

const app = express();
const port = 3000;

app.use("/api", libraryRouter);

app.get("/", (req, res) => {
  const items = libraryController.getItems();
  const joinedItems = items.map((item) => `<li>${item.name}</li>`).join("");
  res.send(`<h1>Hello World!</h1><br><ul>${joinedItems}</ul>`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
