const express = require('express');

const { protect, admin } = require('./../middleware/auth.middleware');

// Controllers
const {
  getProducts,
  getProductsById,
  deleteProduct,
  createProduct,
  updateProduct,
} = require('./../controllers/product.controller');

const router = express.Router();

router.route('/').get(getProducts).post(protect, admin, createProduct);
router
  .route('/:id')
  .get(getProductsById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct);

module.exports = router;
