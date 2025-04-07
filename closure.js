/*
-> closure is nothing but the function has the ability to access the variables
from their lexical scope even when the function is executed outside of that scope
-> a closure is craeted when a function rembers the variables from its outer function
even after that outer function has finished executing
*/

function outer() {
    let count = 0;

    function inner() {
        count++;
        console.log(count);
    }

    return inner;
}

const counter = outer();

counter();
counter();
counter();

/*
output : 
1
2
3

-> from above example we can see that counter() still remembers the value of 
count. this is example of closure.
*/