import express from 'express'
import { libraryController } from '../controller/library.controller'
import bodyParser from 'body-parser'

const router = express.Router()

router.get('/getItems', (req, res) => {
  const items = libraryController.getItems()
  res.status(200).json(items)
})

router.post(
  '/addItem',
  bodyParser.urlencoded({ extended: false }),
  (req, res) => {
    const createdItem = libraryController.addItem(req.body)
    res.render('item', { item: createdItem })
  }
)

router.delete('/deleteItem', (req, res) => {
  const itemId = req.body
  libraryController.deleteItem(itemId)
  res.status(204).send()
})

export default router
