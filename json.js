/*
-> JSON stands for javascript object notation
-> json is a text format for storing and transporting data
->  
*/

// eg of json string
/*
'{"name":"sai" , "age" : 22, "car" : null}'  
  
-> if we parse the json string with the js program we can
access the data as an object

let personName = obj.name;
let personAge = obj.age;

-> json is a lightweight data interchange format
-> json is a plain text written in js object notation
-> json is used to send data between computers
-> json is language independent
-> json syntax is derived from javascript object notation but the json 
format is text only
-> javascript program can easily convert json data into javascript objects
-> js has a built in function for converting json strings into javascript objects
  -> JSON.parse()
  -> JSON.stringify()
-> in json string values must be written with double quotes
// eg : {"name" : "sai"}
-> json values cannot be
-> function
-> date
-> undefined
-> values in json can be null
*/

// parsing json
/*
const object = JSON.parse('{"name": "sai", "age" : 22, "city" : "banglore"}');
console.log(object.name); // output : sai
console.log(object.city); // output : banglore
*/
// array 
/*
const text = '["ford", "BMW", "Audi"]';
const array = JSON.parse(text);
console.log(array); // output : [ 'ford', 'BMW', 'Audi' ]

// json stringify
/*
-> when sending a data to a web server, the data has to be a string
-> we can convert any js datattype into a string with JSON.stringiy().


*/
/*
const object = {name : "kiran", age : 22, city: "chittoor"};
const myJSON = JSON.stringify(object);
console.log(myJSON);
/*
output : 
{"name":"kiran","age":22,"city":"chittoor"}

-> it will be a string
*/





