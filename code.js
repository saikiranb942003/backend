console.log("begins");

setTimeout(() => { console.log("setTimeout 1"); Promise.resolve().then(() => { console.log("promise 1"); }); }, 5000);

new Promise(function (resolve, reject) { console.log("promise 2"); setTimeout(function () { console.log("setTimeout 2"); resolve("resolve 1"); }, 8000); }).then((res) => { console.log("dot then 1"); setTimeout(() => { console.log(res); }, 0); });

/*
output :
begins
promise 2
setTimeout 1
promise 1
setTimeout 2
dot then 1
resolve 1

-> first syncgronous code will be executed (begins)
-> next promises are micro task so that new promise will start execute
so that "promise 2" will be printed
-> then setTimeout (8000ms) is scheduled
-> the outer settimeout (5000ms) will be scheduled
-> after 5s "setTimeout1" will be printed
-> then microtask "promise1" will be scheduld and prints "promise1"
-> after 8s "setTimeout2" will be printed
-> promise will be resolved so then is queued as microtask
-> prints "dot then 1"
-> at last prints "resolve1"





*/
