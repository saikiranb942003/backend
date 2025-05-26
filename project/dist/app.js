"use strict";

require('dotenv').config();
const express = require('express');
const app = express();
const sequelize = require('./config/database');
const signupRoute = require('./routes/signup');
const loginRoute = require('./routes/login');
app.use(express.json());
app.use('/user/signup', signupRoute);
app.use('/user/login', loginRoute);
const profileRoute = require('./routes/profile');
app.use('/user/profile', profileRoute);
const PORT = process.env.PORT || 3000;
sequelize.sync().then(() => {
  console.log('Database synced');
  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
}).catch(err => {
  console.error('Failed to sync database:', err);
});