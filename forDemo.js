/*
Write a JavaScript for loop that will iterate from 0 to 15. For each iteration,
it will check if the current number is odd or even, and display a message to the screen
*/

for(let i= 0;i<=15 ;i++)
{
    if( i % 2 === 0)
    {
       // console.log(i+" is even");
        document.write(i + " is even <br>")
    }
    else {
        document.write(i+" is odd <br>");
        
    }
}

/*
op:
0 is even
1 is odd
2 is even
3 is odd
4 is even
5 is odd
6 is even
7 is odd
8 is even
9 is odd
10 is even
11 is odd
12 is even
13 is odd
14 is even
15 is odd
*/