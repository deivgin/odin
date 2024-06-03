import express from "express";
import { libraryController } from "../controller/library.controller";

const router = express.Router();

router.get("/getItems", (req, res) => {
  const items = libraryController.getItems();
  res.status(200).json(items);
});

router.post("/addItem", (req, res) => {
  console.log(req.body);

  const createdItem = libraryController.addItem(req.body);
  res.status(201).json(createdItem);
});

router.delete("/deleteItem", (req, res) => {
  const itemId = req.body;
  libraryController.deleteItem(itemId);
  res.status(204).send();
});

export default router;
