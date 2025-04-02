/* let doesnot allow to have variables with same name many times
eg : var a = 10;
var a =100;
gives syntax error

// type error : when a const variable is not intialized with the value
eg :
const a;
a=100;

this is not possible in js

//reference error : when we are trying to acess the variable that is not present in the code
eg :
var a=10;
console.log(x);
op: reference error

// shadowing 
 it is just reassign the value of variables in block scope 
 eg :
 
 var a =100;
 let b =200;
 if(true)
 {
    var a = 10;
    let b =20;
    console.log(a);
    console.log(b);
    
    
 }
 console.log(a);
    console.log(b);

op:
10 
20
10   // 
200  //because it uses global and local scope

normal function scope and arrow function scope are same


//closures


function x() {
    var a=10;
    
    function y() {
        
        console.log(a);
        
    }
    y();
}
x();

// op: 10



function x() {
    var a=10;
    
    function y() {
        let a =12;  //shadowing a
        console.log(a);
        
    }
    y();
}
x();
//op : 12



function x() {
    let a=10;
    
    function y() {
        
        console.log(a);
        
    }
    y();
}
x();
// op:10

/* closure : A closure is the combination of function bundled together (enclosed)
with references to its surroundings state (lexical environment) 
in other words a closure gives you access to outer functions scope from an inner function . in js closures are created every time a function is created at function creation time.

eg:
function x() {
var a = 10;
 function y() {
    console.log(a);
 }
    y();
}

x();
//op: 10


function x() {
var a = 10;
 function y() {
    console.log(a);
 }
    return y;
}
console.log(x()); // op: [Function: y]
var z = x();
// write some 1000 lines of
z(); // op:10 // this is because in closures function can remenber its scope and lexical scope also
// thats why the z can be able to print value of a also
// here z is also a function

//uses of closures

->Module Design Pattern
-> Currying
-> Functions like once
-> memoize
-> maintaining state in async world
-> setTimeouts
-> Iterators
-> and many more...

// setTimeout function

function x() {
    var i=1;
    setTimeout(function ()
{
    console.log(i);
},3000);
  console.log("hi hello");
  
} 

x();

//op: hi hello
//1

setTimeout is used to take a function as input and perform the functon after sometime mentioned
that is it is executed after sometime we have been mntined in the setTimeout
till then the js executes the remaining codes

//eg 

function x() {
    for(var i=1;i<=5;i++)
    {
        setTimeout(function () {
            console.log(i);
        },i*1000);
    }
} 
x();

//op : 6
6
6
6
6

function x() {
    for(let i=1;i<=5;i++)
    {
        setTimeout(function () {
            console.log(i);
        },i*1000);
    }
} 
x();

//op:
1
2
3
4
5



function x() {
    for(let i=1;i<=5;i++)
    {
        function close(i) {
        setTimeout(function () {
            console.log(i);
        },i*1000);
      }
          close(i);
    }
} 
x();

//op:
1
2
3
4
5
*/

// strongly typed inherently safe compiled programming languages



