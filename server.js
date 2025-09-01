const express = require('express');
const app = express();

app.use(express.json());

const products = [
  {id: 1, name: "Bottle", price: 250},
  {id: 2, name: "Bag", price: 500},
  {id: 3, name: "Phone", price: 15000}
];

app.get('/products', (req, res) => {
  res.json(products);
});

app.post('/cart', (req, res) => {
  const {productId, quantity} = req.body;
  const product = products.find(p => p.id === productId);
  
  if (!product) {
    return res.status(404).json({error: "Product not found"});
  }
  
  const totalPrice = product.price * quantity;
  res.json({totalPrice});
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});