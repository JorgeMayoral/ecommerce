const express = require('express');

const { protect } = require('./../middleware/auth.middleware');

// Controllers
const {
  addOrderItems,
  getOrderById,
} = require('./../controllers/order.controller');

const router = express.Router();

router.route('/').post(protect, addOrderItems);
router.route('/:id').get(protect, getOrderById);

module.exports = router;
