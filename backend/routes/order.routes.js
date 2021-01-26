const express = require('express');

const { protect } = require('./../middleware/auth.middleware');

// Controllers
const { addOrderItems } = require('./../controllers/order.controller');

const router = express.Router();

router.route('/').post(protect, addOrderItems);

module.exports = router;
