/*console.log("hello");


setTimeout(function () {
    console.log("sai");

},5000);
// used to execute after 5secs of time

console.log("how are doing");



function () {
    console.log("when are going");
    
}

*/

// op: syntax error

setTimeout( () => {
    console.log("sai");

},5000);

//callback pyramid

const cart = ['shoes', 'pants', 'kutas'];

createOrder(cart, function () {

    proceedToPayment(function() {
        showOrderSummary(
            function () {
                updateWallet()
            }
        )
    })
})

/*
callback function is a function that is passed as argument in a function 
just like a value 
above thing is also called as callback hell
callbacks are used to asynchronously exexute the js code
issues with callbacks are
  -> callback hell :
        callback inside callback is or nested callback is called as 
        callback hell.
   -> inversion of control : we have pasted a callback function in a function which we dont know
   how it will execute or it is correct or not or it is working fine or not where it may not call the 
   callback function at all this will effect a lot

*/

