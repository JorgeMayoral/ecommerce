const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
require('colors');

const connectDB = require('./config/db');

// Routes
const productRoutes = require('./routes/product.routes');
const userRoutes = require('./routes/user.routes');
const orderRoutes = require('./routes/order.routes');
const uploadRoutes = require('./routes/upload.routes');

// Middleware
const { notFound, errorHandler } = require('./middleware/error.middleware');

dotenv.config();

const NODE_ENV = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 5000;
const MONGODB_URI =
  process.env.MONGODB_URI || 'mongodb://localhost:27017/ecommerce';

connectDB(MONGODB_URI);

const app = express();

app.use(express.json());

if (NODE_ENV === 'production') {
  app.use(morgan('combined'));
} else {
  app.use(morgan('dev'));
}

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/upload', uploadRoutes);

app.get('/api/config/paypal', (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID),
);

if (NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, './../frontend/build')));
  app.get('*', (req, res) =>
    res.sendFile(
      path.resolve(__dirname, '..', 'frontend', 'build', 'index.html'),
    ),
  );
} else {
  app.get('/', (req, res) => {
    res.status(200).send('API is running...');
  });
}

app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

app.use(notFound);
app.use(errorHandler);

app.listen(
  PORT,
  console.log(
    `Server running in ${NODE_ENV} mode on port ${PORT}`.bgGreen.black.bold,
  ),
);
