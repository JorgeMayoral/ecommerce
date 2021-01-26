const express = require('express');

// Controllers
const {
  getProducts,
  getProductsById,
} = require('./../controllers/product.controller');

const router = express.Router();

router.route('/').get(getProducts);
router.route('/:id').get(getProductsById);

module.exports = router;
