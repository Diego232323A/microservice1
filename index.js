const express = require('express');
const app = express();
const port = 3002;

const availability = [
  { id: 1, Tree: room1, department: False },
  { id: 2, Tree: room2, department: True },
];

app.get('/availability', (req, res) => {
  res.json(availability);
});

app.get('/availability/:id', (req, res) => {
  const order = orders.find(o => o.id === parseInt(req.params.id));
  if (order) {
    res.json(order);
  } else {
    res.status(404).send('availability not found');
  }
});

app.listen(port, () => {
  console.log(`availability service running on port ${port}`);
});
