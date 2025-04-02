/*
-> a programming language is said to have first class functions when functions in that language
are treated like any other variable. for eg : a function can be passed as argument to the other functions
-> can be returned by another functions 
-> can be assigned as value to a variable

//eg: assigning function to a variable
const name = () => {
    console.log("sai");
    
}

name();

// passing function as an argument
function hello() {
    console.log("hello");
    
}
function greeting(msg, name) {
    console.log(msg()+" "+name);
    
} 
greeting(hello,'kiran');
/*op:hello
undefined kiran

note :
->the function that we pass as an argument to naother function is called
a callback function hello() is a callback function

// returning a function

*/

function hello() {
    return () => {
        console.log("hello");
        
    }
}
/*
->we are returning a function in another function - we can return a function 
because functions in js are treated as values
note : a function that returns a function or takes other functions
as arguments is called a higher-order function




// arguments and parameters 

function a(parameter1, parameter2) {
// eg of parameters
}

a(arg1, arg2) // eg of arguments

//first class functions


function a(x) {
    console.log(x);
    
}

a(function() {
    console.log("afunction");
    
});
// op: [Function (anonymous)]


function a(x) {
    console.log(x());
    
}

a(function() {
    console.log("afunction");
    
});

//op: afunction
//undefined

-> in this way we can also return a function like below



function a() {
    return function () {

    }
}

a(); // return nothing


function a() {
    return function () {
       console.log("new function");
       
    }
}

console.log(a());//op: [Function (anonymous)]

*/
/* 
-> the ability of functions to take functions as input as a value and can be passed as arguments
also can be returned (functions) this ability of functions is called as first class functions
-> functions are used as first class citizens or first class functions both mean the same

*/








