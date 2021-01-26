const express = require('express');

const { protect } = require('./../middleware/auth.middleware');

// Controllers
const {
  authUser,
  registerUser,
  getUserProfile,
} = require('./../controllers/user.controller');

const router = express.Router();

router.route('/').post(registerUser);
router.route('/login').post(authUser);
router.route('/profile').get(protect, getUserProfile);

module.exports = router;
