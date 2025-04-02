const cart = ['shoes', 'pants', 'kurta'];

createOrder(cart, function (orderId)
{
    proceedToPayment(orderId);
});



/*

normal call back function

*/

const promise = createOrder(cart);

/* 
here promise is used to store the details of the createOrder intially it is stored with undefined
later after execution of the program all the other details will be stored 
in the promise variable
after that we can attach the promise variable to the callback function and we can be strong that
our code will be executed only once for sure
*/


promise.then(function (orderid) {
    proceedToPayment(orderId);
});

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