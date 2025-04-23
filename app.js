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
/*
You're creating a redundant object for each method (GET, POST, etc.), but ideally, you should 
construct a single object and update it based on the method being used.
*/