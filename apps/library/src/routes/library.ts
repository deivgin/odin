import express from "express";
import { libraryController } from "../controller/library.controller";

const router = express.Router();

router.get("/", (req, res) => {
  res.send(libraryController.getItems());
});

router.post("/", (req, res) => {
  const createdItem = libraryController.addItem(req.body);
  res.status(201).json(createdItem);
});

router.delete("/:id", (req, res) => {
  const itemId = req.body;
  libraryController.deleteItem(itemId);
  res.status(204).send();
});

export default router;
