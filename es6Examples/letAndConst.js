const name = 'sai';
let age = 23;
/*
console.log(name);
console.log(age);
/*
output :
sai
23

*/

// print using template literals
console.log(`my name is ${name} and I am ${age} years old`);
/*
output :
my name is sai and I am 23 years old

*/

// difference between let and const 
/*

// let 
-> the value of variable declared with let can be reassigned
// eg :
let number = 10;
number = 20;
-> can be declared without initialzation
// eg:
let number;
console.log(number); // output: undefined
-> both let and const are block scoped which means they are limited to the block
in which they are defined

// eg :
{
   let x =10;
   const y = 20;
}
console.log(x);  // error
console.log(y); // error





// const

-> the value of a variable declared with const cannot be reassigned
// eg
const number = 10;
number = 20; // not allowed
-> must be initialized at the time of declaration
// eg
const number; // error 
-> const prevents reassignment but does not prevent mutation in non-primitive types
(like arrays and objects)

// eg 

const array = [1, 2,3 ];
array.push(5); // allowed
array = [7,8]; // error


-> we use const for values we do not intend to reassign
-> we use let for values we except to change
*/






