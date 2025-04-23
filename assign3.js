

async function async1() { // async is used because we know that the task inside the function would be asynchoronous.
    console.log("async1 start"); 
    await new Promise((resolve,reject) => {
        resolve('hi hello');
    }).then(resolve => console.log(resolve));
    console.log("async1 end");
}
 /* 
async function async2() {
    console.log("async2");
}
  */
console.log("script start");
  
setTimeout(function () { // macro
    console.log("setTimeout");
}, 0);
  
async1();
  
new Promise(function (resolve) {
    console.log("promise1");
    resolve();
}).then(function () {
    console.log("promise2");
});
  
console.log("script end");

/*
script start
async1 start
promise1
script end
hi hello
promise2
async1 end
setTimeout
*/