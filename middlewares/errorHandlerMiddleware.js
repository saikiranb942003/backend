


// Error Handling Middleware (must come last)
const errorHandlerMiddleware = (err, req, res, next) => {
    console.error(' Error:', err.message);

    res.status(err.statusCode || 500).json({
        error: {
            message: err.message || 'Internal Server Error'
        }
    });
};


module.exports = errorHandlerMiddleware;

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





