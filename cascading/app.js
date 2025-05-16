
const express = require('express');
const { sequelize } = require('./models');

const app = express();
app.use(express.json());

const userRoutes = require('./routes/users');
const orderRoutes = require('./routes/orders');

app.use('/users', userRoutes);
app.use('/orders', orderRoutes);

// Sync database and start server
sequelize.sync({ force: false }).then(() => {
  app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
  });
});
