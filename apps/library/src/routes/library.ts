import express from 'express';
import { libraryController } from '../controller/library.controller';
import bodyParser from 'body-parser';

const router = express.Router();
const parser = bodyParser.urlencoded({ extended: false });

router.get('/get-items', (req, res) => {
  const items = libraryController.getItems();
  res.status(200).json(items);
});

router.post('/add-item', parser, (req, res) => {
  const createdItem = libraryController.addItem(req.body);
  res.render('item', { item: createdItem });
});

router.post('/toggle-edit', parser, (req, res) => {
  const itemId = req.body.id;
  const item = libraryController.getItem(itemId);

  res.render('item-edit', { item });
});

router.delete('/delete-item', parser, (req, res) => {
  const itemId = req.body.id;
  libraryController.deleteItem(itemId);
  res.status(200).send();
});

router.put('/update-item', parser, (req, res) => {
  const updatedItem = libraryController.updateItem(req.body);
  res.render('item', { item: updatedItem });
});

export default router;
