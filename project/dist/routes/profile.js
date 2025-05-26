"use strict";

const express = require('express');
const router = express.Router();
const {
  authenticate
} = require('../middleware/authMiddleware');
const User = require('../models/user');
router.get('/', authenticate, async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id, {
      attributes: {
        exclude: ['password']
      }
    });
    res.json({
      message: 'User profile fetched',
      data: user
    });
  } catch (err) {
    res.status(500).json({
      message: 'Error fetching user',
      error: err.message
    });
  }
});
module.exports = router;