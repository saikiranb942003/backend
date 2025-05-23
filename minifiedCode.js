 // minified code 
/*
-> minified code is code that has been compressed and optimized by removing all the 
un neccessary characters without changing how the code works 
-> this is usually done :
-> to reduce file size 
-> improve website performance 
-> speed up load time 

// minification is commonly used in :   
-> javascript (.js) 
-> css 
-> (html)

// what gets removed during minification 
-> whitespace (spaces, tabs, newlines) 
-> comments 
-> long variable names 
-> newlines 
-> unnecessary semicolons or brackets 


*/

// eg : add two numbers 
function add(a, b) {
    return a + b;
}

console.log(add(5,10)); 

// minified code
function add(a,b){return a+b}console.log(add(5,10));

// we can use tools to minify code 
/*
-> javascript : uglifyJS, Terser 
-> css : CleanCss, cssnano 
-> html : HTMLMinifier 

-> no minified code is not meant to be written manually 
-> we should : 
1. write readble, well commented code 
2. use a build tool to minify it during deployment 

// benefits of minification 
-> lower bandwidth usuage : saves server and user data 
-> faster load time : less data, faster downloads 
-> mild obfuscation : slightly harder to read for hackers (though not secure) 
-> smaller files : ideal for mobile and low-speed networks 

// disadvantages 
-> hard to debug : minified files have no formatting or comments 
-> need for source maps : we must generate .map files for debugging in dev tools 

*/

// Calculate the total price with tax
/*
function calculateTotalPrice(price, taxRate) {
  let taxAmount = price * taxRate;
  let total = price + taxAmount;
  return total;
}

let itemPrice = 100;
let tax = 0.08; // 8% tax

let finalPrice = calculateTotalPrice(itemPrice, tax);
console.log("Final Price:", finalPrice);

*/

// minified version 

function calculateTotalPrice(e,t){return e+e*t}let itemPrice=100,tax=0.08,finalPrice=calculateTotalPrice(itemPrice,tax);console.log("Final Price:",finalPrice);




