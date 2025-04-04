// for
/*for(let i =1;i <=5;i++)
{
    console.log(i);
    
}

/*
op:
1
2
3
4
5
-> in for we dont use functions

*/


//foreach

// const arr = [1, 2, 3, 4, 5];
//console.log(arr); //[ 1, 2, 3, 4, 5 ]

/*arr.forEach((x) => {
    console.log(x);
    
})

arr.forEach((x,i,arr) => {
    console.log(x,i,arr);
    
})

 op:
1 0 [ 1, 2, 3, 4, 5 ]
2 1 [ 1, 2, 3, 4, 5 ]
3 2 [ 1, 2, 3, 4, 5 ]
4 3 [ 1, 2, 3, 4, 5 ]
5 4 [ 1, 2, 3, 4, 5 ]


const arr = [1, 2, 3, 4, 5];
//arr.forEach(x);
//op: ReferenceError: x is not defined

arr.forEach((x) => {
    console.log(x);
    
})
    
/* op:
1
2
3
4
5*/

/*
const array = [1,2,3,4,5];
array.forEach((x) => {
    console.log(x);    
});  
output :
1
2
3
4
5
*/

const array = [1,2,3,4,5];
array.forEach((x) => {
    console.log(x);  
   // break;  // SyntaxError: Illegal break statement
}); 



/*
-> in js both forEach and map are array methods that allow you o iterate over an array
-> it returns the output in the form of variables
-> it returns undefined
-> forEach is for side-effects, does not return a new array, and is used when you don’t need the result.
*/



// map  
/*
const arr = [2, 3, 4, 5, 6 ];

function double(x) {
    return x*2; 
}
const newarr = arr.map(double);
console.log(newarr);

/*
op:
[ 4, 6, 8, 10, 12 ]
 -> map returns op in the form of array
 -> map is for transformations, creates and returns a new array with modified elements.
 -> map returns a new modified array
 */

//filter
/*
-> it is used to filter certain values in it

const arr = [1,2,3,4,5,6,7];
function greater(x) {
    return x > 3;
}
const newarr = arr.filter(greater);
console.log(newarr);



//reduce
-> it is used to find values like sum or largest number etc


const arr = [1,2, 3, 4, 5];

//normal function
function sum(arr) {
    let sum =0;
    for(let i=0;i< arr.length;i++)
    {
        sum = sum + arr[i];
    }
    return sum;
} 

console.log(sum(arr)); //op: 15

const newarr = arr.reduce(function (acc, curr) {
    acc = acc + curr;
    return acc;
},0);
console.log(newarr);

const output = arr.reduce(function (acc,curr) {
   if(curr > acc)
   {
    acc = curr;
   }
   return acc;
},0);

console.log(output);


-> in js the for,The for loop, forEach, map, and filter are all used to iterate over arrays in JavaScript
// for :
->A traditional way of iterating over an array or other iterable objects.
->  Does not return anything by default; you can manipulate or store results manually inside the loop
-> Mutability: You can modify the array or other variables directly inside the loop.

-> Flexibility: Offers maximum control over the iteration process.
 eg:
 
 const arr =[1, 2, 3]
 const res =[];
 for(let i =0;i<arr.length;i++)
 {
    res.push(arr[i] * 2);

 }
console.log(res);
// op : [ 2, 4, 6 ]



const a=10;
//a = 20;
//console.log(a); // TypeError: Assignment to constant variable.
console.log(a + 10);
console.log(a + 30);

// foreach
->To iterate over an array and perform an action for each element.
->It accepts a callback function that gets executed for each element in the array.
->Returns undefined. It doesn’t return anything.
-> You can mutate variables or elements inside the loop, but you cannot modify the array being iterated over.
->  Less flexible than a for loop; mainly used for side effects (e.g., logging, updating variables).

// map
-> To transform each element of the array into a new value and return a new array.
-> Accepts a callback function that modifies each element and returns a new array.

-> Returns a new array of the same length with transformed values.
-> Does not modify the original array; creates a new one.
-> Less flexible than a for loop because it's mainly for transformation and returns a new array.

// filter
-> to filter out elements from the array based on a condition and return a new array with the elements that pass the condition.
-> Accepts a callback function that returns a boolean value (true or false) to decide whether to include each element in the resulting array.
-> Returns a new array with elements that pass the condition.
-> Does not modify the original array; creates a new one.
-> Useful for filtering items based on specific conditions. Less flexible than a for loop if you need complex operations.


-> for loop gives you complete flexibility and control.
-> forEach is great for side effects (e.g., logging) but doesn't return anything useful.
-> map is used when you want to transform each element and get a new array with the transformed values.
-> filter is used when you want to extract a subset of elements based on a condition, returning a new filtered array.






*/














