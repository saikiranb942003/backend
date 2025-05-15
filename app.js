const express = require('express');
const bodyParser = require('body-parser');
const logRequestParams = require('./middleware/logRequestParams');

const app = express();
app.use(bodyParser.json()); // to parse JSON request bodies
app.use(logRequestParams);  // use the logging middleware

// Sample Route
app.get('/users/:id', (req, res) => {
  res.send(`User ID: ${req.params.id}`);
});

// Start Server
const PORT =  4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
