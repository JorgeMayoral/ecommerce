const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema(
  {
    name: { type: String, required: 'Name is required' },
    rating: { type: Number, required: 'Rating is required' },
    comment: { type: String, required: 'Comment is required' },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: 'User is required',
      ref: 'User',
    },
  },
  { timestamps: true },
);

const productSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: 'User is required',
      ref: 'User',
    },
    name: {
      type: String,
      required: 'Name is required',
    },
    image: {
      type: String,
      required: 'Image is required',
    },
    brand: {
      type: String,
      required: 'Brand is required',
    },
    category: {
      type: String,
      required: 'Category is required',
    },
    description: {
      type: String,
      required: 'Description is required',
    },
    reviews: [reviewSchema],
    rating: {
      type: Number,
      required: 'Rating is required',
      default: 0,
    },
    numReviews: {
      type: Number,
      required: 'Number of reviews is required',
      default: 0,
    },
    price: {
      type: Number,
      required: 'Price is required',
      default: 0,
    },
    countInStock: {
      type: Number,
      required: 'Count in stock is required',
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
