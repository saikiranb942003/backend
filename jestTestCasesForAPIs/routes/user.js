const express = require('express');
const router = express.Router();

let users = []; // In-memory array for demo

// Signup route
router.post('/signup', (req, res) => {
  const { email, password } = req.body;
  const existing = users.find(u => u.email === email);
  if (existing) return res.status(400).json({ msg: 'User already exists' });

  users.push({ email, password });
  res.status(201).json({ msg: 'User created' });
});

// Login route
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) return res.status(401).json({ msg: 'Invalid credentials' });

  res.status(200).json({ msg: 'Login successful' });
});

module.exports = router;
