const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: 'User is required',
      ref: 'User',
    },
    orderItems: [
      {
        name: { type: String, required: 'Item name is required' },
        qty: { type: Number, required: 'Item quantity is required' },
        image: { type: String, required: 'Item image is required' },
        price: { type: Number, required: 'Item price is required' },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          required: 'Item id is required',
          ref: 'Product',
        },
      },
    ],
    shippingAddress: {
      address: { type: String, required: 'Address is required' },
      city: { type: String, required: 'City is required' },
      postalCode: { type: String, required: 'Postal code is required' },
      country: { type: String, required: 'Country is required' },
    },
    paymentMethod: {
      type: String,
      required: 'Payment method is required',
    },
    paymentResult: {
      id: { type: String },
      status: { type: String },
      update_time: { type: String },
      email_address: { type: String },
    },
    taxPrice: {
      type: Number,
      required: 'Tax price is required',
      default: 0.0,
    },
    shippingPrice: {
      type: Number,
      required: 'Shipping price is required',
      default: 0.0,
    },
    totalPrice: {
      type: Number,
      required: 'Total price is required',
      default: 0.0,
    },
    isPaid: {
      type: Boolean,
      required: 'Is pais is required',
      default: false,
    },
    paidAt: {
      type: Date,
    },
    isDelivered: {
      type: Boolean,
      required: 'Is delivered is required',
      default: false,
    },
    deliveredAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  },
);

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
