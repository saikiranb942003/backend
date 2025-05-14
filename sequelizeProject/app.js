import express from "express";
import User from "./models/user.js";

const app = express();
app.use(express.json());

// GET all users
app.get('/users', async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

// GET a user by name
app.get('/users/:name', async (req, res) => {
  const { name } = req.params;
  const user = await User.findOne({ where: { name } });

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  res.json(user);
});

// POST a new user
app.post('/users', async (req, res) => {
  const { name, city, education } = req.body;

  if (!name || !city || !education) {
    return res.status(400).json({ error: 'Provide name, city, and education' });
  }

  try {
    const user = await User.create({ name, city, education });
    res.status(201).json({ message: 'User added', user });
  } catch (error) {
    res.status(500).json({ error: 'Error adding user', details: error.message });
  }
});

// PUT (update) a user by name 
app.put('/users/:name', async (req, res) => {
  const { name } = req.params;
  const { city, education } = req.body;

  const user = await User.findOne({ where: { name } });
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  user.city = city;
  user.education = education;
  await user.save();

  res.json({ message: 'User updated', user });
});

// PATCH (partially update a user by name)
app.patch('/users/:name', async (req, res) => {
  const { name } = req.params;
  const { city, education } = req.body;

  const user = await User.findOne({ where: { name } });
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  if (city) user.city = city;
  if (education) user.education = education;
  await user.save();

  res.json({ message: 'User partially updated', user });
});

// DELETE a user by name
app.delete('/users/:name', async (req, res) => {
  const { name } = req.params;
  const user = await User.findOne({ where: { name } });

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  await user.destroy();
  res.json({ message: 'User deleted' });
});

// Start server
const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
