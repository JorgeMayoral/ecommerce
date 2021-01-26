const express = require('express');

const { protect } = require('./../middleware/auth.middleware');

// Controllers
const {
  authUser,
  getUserProfile,
} = require('./../controllers/user.controller');

const router = express.Router();

router.route('/login').post(authUser);
router.route('/profile').get(protect, getUserProfile);

module.exports = router;
