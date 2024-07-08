const express = require('express');
const app = express();
const port = 3002;

const orders = [
  { id: 1, userId: 1, productId: 1, quantity: 11 },
  { id: 2, userId: 2, productId: 2, quantity: 4 },
];

app.get('/orders', (req, res) => {
  res.json(orders);
});

app.get('/orders/:id', (req, res) => {
  const order = orders.find(o => o.id === parseInt(req.params.id));
  if (order) {
    res.json(order);
  } else {
    res.status(404).send('Order not found');
  }
});

app.listen(port, () => {
  console.log(`Order service running on port ${port}`);
});
