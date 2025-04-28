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

app.use(express.json());

// Route that triggers an error
app.get('/error', (req, res, next) => {
    const err = new Error('Something broke!');
    err.statusCode = 400;
    next(err); // Pass the error to error-handling middleware
});

// A normal route
app.get('/hello', (req, res) => {
    res.send('Hello kiran');
});

// Error Handling Middleware (must come last)
app.use((err, req, res, next) => {
    console.error(' Error:', err.message);

    res.status(err.statusCode || 500).json({
        error: {
            message: err.message || 'Internal Server Error'
        }
    });
});

app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
});

/*
output :
url :
output :
Hello kiran



*/
/*
url : http://localhost:5000/error/
ouput:
 Error: Something broke! (in terminal)
{
    "error": {
        "message": "Something broke!"
    }
}
*/





