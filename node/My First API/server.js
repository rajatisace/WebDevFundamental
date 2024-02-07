const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
const PORT = 3000;

products = [];

app.get("/products", (req, res) => {
  res.json(products);
});

app.post("/products", (req, res) => {
  products.push(req.body);
  res.json(products);
});

app.put("/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const product = req.body;
  const index = products.findIndex((s) => s.id === id);
  products[index] = product;
  res.json(product);
});

app.delete("/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = products.findIndex((s) => s.id === id);
  products.splice(index, 1);
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`SERVER START AT PORT ${PORT}`);
});
