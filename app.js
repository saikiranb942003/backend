const express = require('express');
const app = express();

app.use(express.json());

const getRoutes = require('./routes/get');
const postRoutes = require('./routes/post');
const putRoutes = require('./routes/put');
const deleteRoutes = require('./routes/delete');

// Base route for users
app.use('/users', getRoutes);
app.use('/users', postRoutes);
app.use('/users', putRoutes);
app.use('/users', deleteRoutes);

app.listen(6000, () => console.log('Server running on http://localhost:6000'));
