const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: 'Name is required',
    },
    email: {
      type: String,
      required: 'Email is required',
      unique: 'Email must be unique',
    },
    password: {
      type: String,
      required: 'Password is required',
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

const User = mongoose.model('User', UserSchema);

module.exports = User;
