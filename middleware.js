/*
-> middle ware functions are functions that have access to the request and response object and the next middleware
function in the applications request and response cycle
-> the next middleware function is commonly denoted by a vaiable named next
// middleware functions can peform 
-> execute any code
-> make changes to the request and response objects
-> end the request-response cycle
-> call the next middleware function in the stack


*/
const express = require('express');
const app = express();

const users = ['sai', 'kiran'];

app.use(express.json());


app.use((req, res, next) => {
    console.log("hello from middleware 1");
    next(); // this is used to call next middlewares
}) 

app.get('/users', (req, res) => {
    res.json(users);
});

app.listen(5000,() => {
     console.log('running server');
     
});








