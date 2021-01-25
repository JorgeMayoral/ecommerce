const express = require('express');
const dotenv = require('dotenv');
require('colors');

const connectDB = require('./config/db');

// Routes
const productRoutes = require('./routes/product.routes');

// Middleware
const { notFound, errorHandler } = require('./middleware/error.middleware');

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

app.use('/api/products', productRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(
  PORT,
  console.log(
    `Server running in ${NODE_ENV} mode on port ${PORT}`.bgGreen.black.bold,
  ),
);
