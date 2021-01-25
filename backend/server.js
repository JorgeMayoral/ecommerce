const express = require('express');
const dotenv = require('dotenv');
require('colors');

const products = require('./data/products');
const connectDB = require('./config/db');

dotenv.config();

const NODE_ENV = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 5000;
const MONGODB_URI =
  process.env.MONGODB_URI || 'mongodb://localhost:27017/ecommerce';

connectDB(MONGODB_URI);

const app = express();

app.get('/', (req, res) => {
  res.send('API is running');
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.listen(
  PORT,
  console.log(
    `Server running in ${NODE_ENV} mode on port ${PORT}`.bgGreen.black.bold,
  ),
);
