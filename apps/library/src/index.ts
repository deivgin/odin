import express from 'express';
import libraryRouter from './routes/library';
import path from 'node:path';
import { libraryController } from './controller/library.controller';

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/api', libraryRouter);

app.get('/', (req, res) => {
  const items = libraryController.getItems();
  res.render('index', { title: 'Library App', items });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
