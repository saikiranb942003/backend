const express = require('express');
const passport = require('passport');
const authRoutes = require('./routes/auth');
const { sequelize } = require('./models');
require('./config/passport')(passport);
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(passport.initialize());

// Routes
app.use('/auth', authRoutes);

// Protected Route (Example)
app.get('/profile', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json({ message: 'Welcome to your profile', user: req.user });
});

// Database Connection and Server Start
sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
  });
});
