const mongoose = require('mongoose');
const dotenv = require('dotenv');
require('colors');

const users = require('./data/users');
const products = require('./data/products');

const User = require('./models/user.model');
const Product = require('./models/product.model');
const Order = require('./models/order.model');

const connectDB = require('./config/db');

dotenv.config();

connectDB(process.env.MONGODB_URI);

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;
    const samplePorducts = products.map((product) => {
      return { ...product, user: adminUser };
    });
    await Product.insertMany(samplePorducts);

    console.log('DATA IMPORTED!'.green.inverse.bold);
    process.exit(0);
  } catch (error) {
    console.error(`ERROR: ${error.message}`.bgRed.black.bold);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log('DATA DESTROYED!'.yellow.inverse.bold);
    process.exit(0);
  } catch (error) {
    console.error(`ERROR: ${error.message}`.bgRed.black.bold);
    process.exit(1);
  }
};

if (process.env.NODE_ENV !== 'development') {
  console.error(
    'ERROR: You can use the seeder script ONLY in development mode'.red.inverse
      .bold,
  );
  process.exit(1);
} else {
  if (process.argv[2] === '-d') {
    destroyData();
  } else {
    importData();
  }
}
