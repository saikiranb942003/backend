/*• Create a program to access elements in an array
For example : const myArray = ['h', 'e', 'l', 'l', 'o'];
Now if I need 0 index so output will be 'h', If I need to access 2 index then output will be l. 
The index will be dynamic


const myArray = ['h', 'e', 'l', 'l','o'];
console.log(myArray[0]);



function print(x) {
    for(let i=0;i<myArray.length;i++)
        {
            if(i === x)
            {
                console.log(myArray[i]);
                break;
                
            }
        }
}

print(0);

*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter array elements separated by commas: ', (iarr) => {
    const arr = iarr.split(',').map(item => item.trim()); 
    rl.question('Enter the index you want to access: ', (index) => {
        index = parseInt(index); 
        if (index >= 0 && index < arr.length - 1) {
            console.log(`Element at index ${index}: '${arr[index]}'`);
        } else {
            console.log('Invalid index! Please enter a number between 0 and ' + (arr.length - 1));
        }

        rl.close();
    });
});




/*
const array = [1,2,3];
array.forEach((x) => {
    console.log(x);
    
})
//Create a prototype method customForEach and it should work the same as forEach method. 
Array.prototype.customForEach = () => {
         
}
*/
/*
Array.prototype.customForEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};


let array = [10, 20, 30];

array.customForEach((element, index, array) => {
    console.log(`Element: ${element}, Index: ${index}, Array: ${array}`);
});
*/
/*
const array1 =[1,2,3];

array1.forEach((x) => {
    console.log(x);
    
})

function z() {
   console.log("hello");
   
}
z();
*/


