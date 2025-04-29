
const express = require('express');
const router = express.Router();

const getRoutes = require('./get');
const postRoutes = require('./post');
const putRoutes = require('./put');
const deleteRoutes = require('./delete');

// Use sub-routes
router.use('/', getRoutes);
router.use('/', postRoutes);
router.use('/', putRoutes);
router.use('/', deleteRoutes);

module.exports = router;
