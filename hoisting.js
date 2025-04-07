// scope 

// function x() {
//     console.log(b);
       
// }
// x();
// let b;
// op : ReferenceError: Cannot access 'b' before initialization

/*
function x() {
    console.log(b);
       
}
x();
let b = 10 ;

// output : ReferenceError: Cannot access 'b' before initialization
*/


function x() {
    console.log(b);
       
}
x();
var b;

//op:
undefined
// from above we can see that using let it says error but using var it says no error this is due to hoisting comcept
// functions and var allows hoisting concept 
/*
function x() {
    y();
    function y() {
        console.log(b);
        
    }
}
x();
var b =10;

//op:
undefined
*/

/*
function x() {
    y();
    function y() {
        console.log(b);
        
    }
}

let b =10;
x();
// op: 10

//lexical environment is the local memory and along with the lexical environment of parent
// lexical : inorder or herirchy  
/*  
-> window is global object
-> this is also called global object
-> var is joined with global object and so that it can accesed with the using of window and this keywords
-> let and const are hoisted but it is stored in seperate stoarage not in global stoarage it will be
in temporal dead zone till it is intialized with some value unlike var keyword



// hoisting 

->in js even before  the exection of js code memeory is allocated for eacha dn every variable and functions
-> js is synchronous single threaded language
-> at a time one line is executed (single thred)
-> line by line execution is done (syn)
-> it is based on execution context
    -> has 2 parts 
    -> memory, code
*/

