const express = require('express');

const { protect, admin } = require('./../middleware/auth.middleware');

// Controllers
const {
  getProducts,
  getProductsById,
  deleteProduct,
} = require('./../controllers/product.controller');

const router = express.Router();

router.route('/').get(getProducts);
router.route('/:id').get(getProductsById).delete(protect, admin, deleteProduct);

module.exports = router;
