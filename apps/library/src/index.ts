import express from "express";
import { engine } from "express-handlebars";
import libraryRouter from "./routes/library";
import path from "node:path";
import { libraryController } from "./controller/library.controller";

const app = express();
const port = 3000;
const viewDir = path.join(__dirname, "views");

app.engine(
  "hbs",
  engine({
    defaultLayout: "main",
    extname: "hbs",
    layoutsDir: path.join(viewDir, "layouts"),
  }),
);
app.set("view engine", "hbs");
app.set("views", viewDir);

app.use("/api", libraryRouter);

app.get("/", (req, res) => {
  const items = libraryController.getItems();
  res.render("home", { items });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
