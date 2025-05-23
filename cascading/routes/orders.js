
const express = require('express');
const router = express.Router();
const { Order, User } = require('../models');

// Get order by id with its user info
router.get('/:orderId', async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.orderId, {
      include: {
        model: User,
        as: 'user',
        attributes: ['id', 'name']
      },
      attributes: ['id', 'createdAt']
    });

    if (!order) return res.status(404).json({ message: 'Order not found' });

    res.json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create a new order for a user
router.post('/', async (req, res) => {
  try {
    const { userId } = req.body;
    if (!userId) return res.status(400).json({ message: 'userId is required' });

    const user = await User.findByPk(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    const newOrder = await Order.create({ userId });
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



module.exports = router;
