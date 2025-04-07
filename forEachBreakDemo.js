/*
-> The forEach method is used to execute a callback function on each element of an array and cannot be
broken or exited early using break, continue, or return from the outer function.



*/
/*
const array = [1, 2, 3, 4, 5];


array.forEach((num) => {
  if (num === 3) {
    break; //  This will throw an syntax error
  }
  console.log(num);
});


// instead we can use 
/*
for (const num of array) {
    if (num === 3) {
        break;
    }
    console.log(num);
}
*/
/*
output :
1
2
*/
/*
for (let i = 0; i < array.length; i++) {
    if (array[i] === 3) break;
    console.log(array[i]);
}
*/
/*
output :
1
2
*/

/*
for(let num in array) {
    if(num === 3) break;

    console.log(num);
    
}

/*
output :
0
1
2
3
4
*/

/*let array2 = [5,4,3,2,1];
for(let num in array2) {
    if(num === 3) break;

    console.log(num);
    
}
/*
output :
0
1
2
3
4
*/
/*
let  array3 = [8,9,7];
for(let num in array3) {
    if(num === 7) break;

    console.log(num);   
}

/*
output :
0
1
2

-> for in iterates over the keys (indexs) of an array as strings
-> so num is not the value of array (8,9) its actually the index 
as a string '0' , '1' etc
-> when we try if(num === 7) we are comapring a string to a number
this condition will never be true
-> so loop prints all the indexes

*/

// to break the loop
//let array2 = [1,2,3,4,5];
/*for (let num in array2) {
    if (+num === 3) break; // +(unary) operator used to convert the string to number
    console.log(num);
}
/*
output :
0
1
2
*/
/*
let array2 = [1,2,3,4,5];
for(let num in array2) {
    if(array2[num] === 4) {
        break;
    }
    console.log(array2[num]);
    
}
/*
output :
1
2
3
*/
/*
let array2 = [9,8,7,6,5];
for(let num in array2) {
    if(array2[num] === 6) {
        break;
    }
    console.log(array2[num]);
    
}
*/

// foreach loop using return 
let array = [1,2,3,4,5];
array.forEach((number)=>{
    if(number === 3)
    {
        return;
    }
    console.log(number);
    
})
/*
output:
1
2
4
5

-> using return it skips only the current element like (continue in java)
and keep executing rest elements it doesnt stop like (return in java)
-> also break and continue is invalid in js
*/
