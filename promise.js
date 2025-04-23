/*const cart = ['shoes', 'pants', 'kurta'];

function createOrder(array,x) {
    console.log("creating order");
    
}
createOrder(cart, function (orderId)
{
    proceedToPayment(orderId);
});



/*

normal call back function

*/

const { resolve } = require("path");

// const promise = createOrder(cart);

/* 
here promise is used to store the details of the createOrder intially it is stored with undefined
later after execution of the program all the other details will be stored 
in the promise variable
after that we can attach the promise variable to the callback function and we can be strong that
our code will be executed only once for sure



promise.then(function (orderid) {
    proceedToPayment(orderId);
    
});

function proceedToPayment(orderId) {
    console.log("payment successful");
    
}

/*
promise has 
-> states : 1.pending,
      2.fulfilled
      3. rejected
-> result : response or data    
-> promise are objects 
-> they are immutable 
-> promise is an object reprsenting the eventual completion or failure
of an asynchronous operations*/


/*
-> promise : an object that manages asynchronous operations
-> wrap a promise object around (asynchrnous code)
-> it returns a value for sure
-> pending -> 
-> it can be either resolved : process executed successfully 
-> or rejected(does not fetch the required data)
-> we create using new Promise((resolve, reject) => {asynchronous code})

// eg do the following in the order
1. Walk the dog
2. Clean the kitchen
3. Take out the trash

*/
// using callbacks
/*
function walkdog() {

    setTimeout(() => {
        console.log("you are taking the dog out");
        
    },1500);
}

function cleanKitchen() {

    setTimeout(()=> {
        console.log('i clean the kitchen');
        
    },2500);
}

function takeOutTrash() {

    setTimeout(()=> {
        console.log('i take out the trash');
        
    },500);
}

walkdog();
cleanKitchen; // does no output or no error
cleanKitchen();
takeOutTrash();
/*
output:
i take out the trash
you are taking the dog out
i clean the kitchen

-> it print based on the time we are given
*/
/*
function walkdog() {

    setTimeout(() => {
        console.log("you are taking the dog out");
        
    },1500);
}

function cleanKitchen() {

    setTimeout(()=> {
        console.log('i clean the kitchen');
        
    },1500);
}

walkdog();
cleanKitchen();
/*
output :
you are taking the dog out
i clean the kitchen
*/
/*
function walkdog(callback) {

    setTimeout(() => {
        console.log("you are taking the dog out");
        callback();
    },1500);
}

function cleanKitchen(callback) {

    setTimeout(()=> {
        console.log('i clean the kitchen');
        callback();
    },2500);
}

function takeOutTrash(callback) {

    setTimeout(()=> {
        console.log('i take out the trash');
        callback();
    },500);
}

walkdog(()=>{
    cleanKitchen(()=> {
        takeOutTrash(()=> {
            console.log(" i finished all the works");
            
        })
    })
});
*/
/*
output :
you are taking the dog out
i clean the kitchen
i take out the trash
 i finished all the works

 -> it is called callback hell 
 -> we call each function and pass another function to it

 */

// using promises : we use method chaining here

function walkdog() {
    return new Promise((resolve,reject) => {
           setTimeout(() => {
            resolve("1. you are taking the dog out");
           },1500);
        }  
    ) ;
}

function cleanKitchen() {
    return new Promise((resolve,reject) => {
        setTimeout(()=> {
            resolve('2. i clean the kitchen');
            
        },2500);
    
    })
}

function takeOutTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve('3. i take out the trash');
           
        },500);
    })
}


/*
walkdog(); // output : nothing

walkdog().then(value => console.log(value));
cleanKitchen().then(value => console.log(value));
takeOutTrash().then(value => console.log(value));
/*
output :
i take out the trash
you are taking the dog out
i clean the kitchen
*/

// walkdog().then(console.log('hello'));
/*
async function doAllTasks() {
    const dog = await walkdog();
    console.log(dog);

    const kitchen = await cleanKitchen();
    console.log(kitchen);

    const trash = await takeOutTrash();
    console.log(trash);
}

doAllTasks();
/*
output :
you are taking the dog out
i clean the kitchen
i take out the trash
*/
// using promises

walkdog().then(value => {console.log(value);
     return cleanKitchen();
}).then(value => {console.log(value); return takeOutTrash();
}).then(value => {console.log(value); console.log("all tasks are completed");
});

/* 
output :
you are taking the dog out
i clean the kitchen
i take out the trash
all tasks are completed
*/
/*
async function doAllAtOnce() {
    const [dog, kitchen, trash] = await Promise.all([
        walkdog(),
        cleanKitchen(),
        takeOutTrash()
    ]);

    console.log(dog);
    console.log(kitchen);
    console.log(trash);
}

doAllAtOnce();
/*
output :
1. you are taking the dog out
2. i clean the kitchen
3. i take out the trash
*/












