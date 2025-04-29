/*
-> error handling middleware in express is a special type of middleware that catches and handles
errors during requst processing
-> unlike normal middleware it has 4 parameters
(err,req,res, next)
-> if any middleware or route handler passes an error to next(err), express skips the remaining 
middleware and routes and goes straight to the error handler

// Usuage 

-> it is used for centralized error handling (dont repeat code)
-> it gives consistent error responses
-> we can use just next(err) wherever needed
-> esier debigging in development and safer in production


*/

const express = require('express');
const app = express();
const errorHandlerMiddleware = require('./middlewares/errorHandlerMiddleware');

app.use(express.json());

// Route that triggers an error
app.get('/error', (req, res, next) => {
    const err = new Error('Something broke!');
    err.statusCode = 400;
    next(err);
});

// A normal route
app.get('/hello', (req, res) => {
    res.send('Hello kiran');
});

// Use the centralized error handler
app.use(errorHandlerMiddleware);

app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
});
