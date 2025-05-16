
const express = require('express');
const router = express.Router();
const { User, Order } = require('../models');

// Get all orders for user with id=:userId
router.get('/:userId/orders', async (req, res) => {
  try {
    const userWithOrders = await User.findByPk(req.params.userId, {
      include: {
        model: Order,
        as: 'orders',
        attributes: ['id', 'createdAt']
      }
    });

    if (!userWithOrders) return res.status(404).json({ message: 'User not found' });

    res.json(userWithOrders.orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete a user (and cascade delete their orders)
router.delete('/:userId', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    await user.destroy();
    res.json({ message: 'User and associated orders deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;


