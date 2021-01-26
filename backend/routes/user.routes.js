const express = require('express');

// Controllers
const { authUser } = require('./../controllers/user.controller');

const router = express.Router();

router.route('/login').post(authUser);

module.exports = router;
