//prototypes
/* 
object.__proto__ is nothing but Object.prototype
object.__proto__.__proto__ is null
fun.__proto__ is function.prototype
fun.__proto__.__proto__ is object.prototype
-> evry thing in js is a object it comes under this concept prototype chain
*/

//eg:
let object = {
    name : "sai",
    city : "chitoor",
    getIntro : function() {
        console.log(this.name + " from " + this.city);
        
    } 
}

let object2 = {
    name : "kiran"
}

object2.__proto__ = object;
//object.getIntro()  //sai from chitoor
//console.log(object.name); //sai
//console.log(object);  // { name: 'sai', city: 'chitoor', getIntro: [Function: getIntro] }
//console.log(object.getIntro); //[Function: getIntro]
//console.log(object.getIntro()); //sai from chitoor
                                //undefined
//console.log();
//object.getIntro() //ReferenceError: getIntro is not defined
//console.log(getIntro());  //ReferenceError: getIntro is not defined
//object.name;  // ntg will be printed
/* //object2.__proto__ = object,  by this we can access the properties of object2 also if not present we can access it from
-> it from the parent object (object) in this way this inheritance works


object2.getIntro(); //kiran from chitoor

//eg;
Function.prototype.mybind = function () {
    console.log(" hi hello");
    
}
/* 
above code is used to add mybind function as method to every function 
so that it can be used for every functions


function fun () {

}

function fun2() {

}

//fun.mybind(); //hi hello
fun2.mybind(); //hi hello
*/
/*

const arr = [1, 2,3];
//arr.mybind(); //op : TypeError: arr.mybind is not a function
//console.log(arr.mybind()); // op: TypeError: arr.mybind is not a function
//mybind // op:ReferenceError: mybind is not defined
//mybind();  // ReferenceError: mybind is not defined

function fun () {
    console.log("welcome");
    
}

*/
// fun.mybind;//op: no error
// fun.mybind(); //op: hi hello
//fun(); //welcome
//fun().mybind; // TE : Cannot read properties of undefined (reading 'mybind')
//fun().mybind(); // TypeError: Cannot read properties of undefined (reading 'mybind')

Array.prototype.len = function () {
    let c=0;
    for(i in this)
    {
        if(this.hasOwnProperty(i))
        c++;
        //i++;
    }
    return c ;
}

const arr = [4,5,6];
arr.length;// op: no output
//arr.length(); // op:TypeError: arr.length is not a function
// console.log(arr.length);// 5
// console.log(arr.length()) // TypeError: arr.length is not a function


//console.log(arr.len());// 3
arr.len(); //no op
arr.len; // no op











