import express from 'express';
import bodyParser from 'body-parser';
import { initialBalance, initialItems } from './data';

const app = express();
app.use(bodyParser.json());

app.get('/', async (req, res) => {
  res.send('ok');
});

app.get('/items', async (req, res) => {
  // const data = req.body;
  throw new Error('Not implemented');
  // res.send(initialItems);
});
app.listen(8000, () => {
  console.log('🚀 Server started 🚀');
});

// more routes to implement here
