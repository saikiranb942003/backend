/*
-> these all are static methods of javascripts promise class
used for handling multiple promises concurrently but they behave very 
differently 



*/

// promise.any()

/*
-> we use it when we want the first successful result(ignore rejections)
-> resolves as soon as one promise resolves
-> ignores rejected promises
-> rejects only if all promises reject

*/
/*
const p1 = Promise.reject("Error from p1");
const p2 = Promise.reject("success from p2");
const p3 = Promise.reject("success from p3");

Promise.any([p1,p2,p3])
    .then(result => console.log("result" + result))
    .catch(error => console.log("all result", error));
/*
output:
all result [AggregateError: All promises were rejected] {
  [errors]: [ 'Error from p1', 'success from p2', 'success from p3' ]
}

*/
/*
const p1 = Promise.reject("Error from p1");
const p2 = Promise.resolve("success from p2");
const p3 = Promise.resolve("success from p3");

Promise.any([p1,p2,p3])
    .then(result => console.log("result " + result))
    .catch(error => console.log("all result", error));
// output : resultsuccess from p2

// Promise.allSettled()

/*
-> we use when we want to wait for all promises to finish, regradless of success or failure
-> resolves when all promise settle (either fulfilled or rejected)
-> always resolves (never rejects)
-> returns an array of object with { status, value | reason}

*/
/*
const p1 = Promise.resolve("success from p1");
const p2 = Promise.reject("error from p2");
Promise.allSettled([p1,p2])
    .then(results => {
        results.forEach((result,index) => {
            if(result.status === 'fulfilled') {
                console.log(`promise ${index}:`, result.value);
                
            } else {
                console.log(`Promise ${index}:`, result.reason);
                
            }
        });
    });
/*
output : 
promise 0: success from p1
Promise 1: error from p2
*/

// promise.race

/*
-> we use when we want the first settled result(resolve or resolve)
-> settles as soon as the first promise settles (fulfilled or rejected)
-> can resolve or reject depending on the first result
*/

const p1 = new Promise((res) => setTimeout(() => res("resolved p1"),100));
const p2 = new Promise((res,rej) => setTimeout(() => rej("rejected p2"), 50));

Promise.race([p1,p2])
    .then(result => console.log("first :", result))
    .catch(error => console.log("first error :", error));
// output : first error : rejected p2
    

