//const arr = [1,2,3,4,5];
/*
Write a JavaScript conditional statement to find the largest of five numbers.
Display an alert box to show the result.
*/

let num1 = 10;
let num2 = 2;
let num3 = 13;
let num4 = 4;
let num5 = 5;
let largeNumber = num1;

if(num2 > largeNumber)
{
    largeNumber = num2; 
}
if (num3 > largeNumber)
{
    largeNumber = num3;
}
if(num4 > largeNumber) 
{
    largeNumber = num4;
}
if(num5 > largeNumber)
{
    largeNumber = num5;
}

alert(largeNumber);

