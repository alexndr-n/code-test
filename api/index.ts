import express from 'express';
import bodyParser from 'body-parser';
import { initialBalance, initialItems, Item } from './data';
import cors from 'cors';

const app = express();
app.use(bodyParser.json());
app.use(cors())

const currentItems = [...initialItems]
let currentBalance = (+initialBalance)

app.get('/', async (req, res) => {
  res.send('ok');
});

app.get('/items', async (req, res) => {
  try {
    res.send(currentItems).end()
  } catch (error) {
    console.error(error)
    res.status(500).end
  }
});

app.get('/balance', async (req, res) => {
  try {
    res.send(currentBalance).end()
  } catch (error) {
    console.error(error)
    res.status(500).end
  }
});

app.post('/purchase', async (req, res) => {
  try {
    const { itemId, quantity } = req.body;
    const item: Item | undefined = currentItems.find(item => item.id === itemId)
    if(!item) return res.status(500).end()
    if(item.inventory < quantity) return res.status(402).send('Not enough inventory');
    if(item.price * quantity > currentBalance) return res.status(402).send('Not enough balance');
    item.inventory -= quantity;
    currentBalance -= quantity * item.price;
    res.status(200).send({balance: currentBalance}).end()
  } catch (error) {
    console.error(error)
    res.status(500).end
  }
});

app.listen(8000, () => {
  console.log('🚀 Server started 🚀');
});

// more routes to implement here
