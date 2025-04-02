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
const { log } = require('console');
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
const arr = [1,2,3];
arr.forEach((x) => {
    console.log(x);
    
})
//Create a prototype method customForEach and it should work the same as forEach method. 
Array.prototype.customForEach = () => {
         
}
*/

Array.prototype.customForEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};


let arr = [10, 20, 30];

arr.customForEach((element, index, array) => {
    console.log(`Element: ${element}, Index: ${index}, Array: ${array}`);
});

const arr1 =[1,2,3];

arr1.forEach((x) => {
    console.log(x);
    
})









