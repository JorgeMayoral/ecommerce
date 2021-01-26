const express = require('express');

const { protect } = require('./../middleware/auth.middleware');

// Controllers
const {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
} = require('./../controllers/user.controller');

const router = express.Router();

router.route('/').post(registerUser);
router.route('/login').post(authUser);
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

module.exports = router;
