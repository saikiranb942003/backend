/*

-> Event loop makes node so fast and efficient especially for io heavy tasks like reading files
quering databases, making network requests
-> event loop is a mechanism that allows node.js to handle multiple operations like reading files,
making api calls, handling user inputs without blocking the main thread
-> like a traffic controller that manaages multiple cars(tasks) making sure everything moves smoothly one at a time
even though many thngs seem to be happening at once
-> node.js is single threaded (only one thing can run at a time on the main thread)
-> but it can handle many operations asynchronously (non-blocking)
-> this is because of:
-> event loop
-> callback queue
-> worker threads
-> task queues (microtask and macrotask)


Main components:
-> call stack :
   -> keeps track of the currently executing function
   -> only one task at a time can run here
-> Callback Queue :
   -> stores callbacks that are ready to be run after async tasks finish
-> Event loop :
   -> continously check the call empty
   -> also is there any tasks in the queue
   -> if yes then the task moves from the queue to the call stack
-> Event loop cycle :
   1. Timers : executes setTimeout() and setInterval() callbacks
   2. Pending callbacks : executes io callbacks that were deferred
   3. Idle : it is used for internal use
   4. Poll : waits for new io events (data from a file or network)
   5. check : executes setImmediates() calbacks
   6. close callbacks : executes close events like socket.on('close')
-> in between these phases microtasks (like promise.then(), ) are run before the next loop iteration





*/
/*
console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

Promise.resolve().then(() => {
  console.log("3");
});

console.log("4");
/*
output:
1
4
3
2

-> console.log("1") and console.log("4") are synchronous so they run first
-> Promise.then() is a microtask so that runs after current stack but before timer
-> setTimeout() is a macrotask so that runs in the next loop cycle
*/

// eg : setTimeout()
/*
console.log('start');

setTimeout(() => {
   console.log("timeout callback");
   
},0);

console.log('end');
/*
output:
start
end
timeout callback

-> Even though setTimeout is set to 0ms, it still waits until the current call stack is clear, then runs in the timers phase of the event loop
*/

// setImmediate()
/*
setImmediate(() => {
   console.log('setImmediate');
   
});

setTimeout(() => {
   console.log('setTimeout');
   
},0);
/*
output :
setTimeout
setImmediate

-> setImmediate is queued in the check phase while setTimeout(with 0ms) runs in the timers phase
-> if placed inside an io callback setImmediate usually runs first

*/
/*
console.log("Start");

Promise.resolve().then(() => {
  console.log("Promise resolved");
});

console.log("End");

/*
output :
Start
End
Promise resolved

-> Promise.then() is a microtask which always runs after the current call stack
is done and but before the next macrotask (like setTimeout)


*/

// process.nextTick()

console.log('start');

Process.nextTick(() => {
   console.log('next tick');
   
});

console.log('end');
/*
output:
Start
End
Next Tick

-> process.nextTick() runs even before promises right after the current operation
but before any other async tasks.
-> it is the highest priority microtask in node.js
-> nextTick() runs before promise
-> then microtasks like Promise.then()
-> then setTimeout(timers phase)
-> finally setImmediate (check phase)
-> microtasks always run before macrotasks
-> microtasks are used for small immediate updates(like resolving promise)
-> macrotasks are used for bigger async operations(timers, file reads etc)
*/













