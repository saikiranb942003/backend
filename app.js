
const express = require('express');
const app = express();

const routes = require('./routes/index');

app.use('/', routes);



app.listen(6000, () => console.log('Server running on http://localhost:6000'));
