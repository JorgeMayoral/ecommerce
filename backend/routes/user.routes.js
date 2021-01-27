const express = require('express');

const { protect, admin } = require('./../middleware/auth.middleware');

// Controllers
const {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
} = require('./../controllers/user.controller');

const router = express.Router();

router.route('/').post(registerUser).get(protect, admin, getUsers);
router.route('/login').post(authUser);
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

module.exports = router;
