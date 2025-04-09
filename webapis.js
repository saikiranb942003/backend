/*
-> call stack is present in the js engine
-> js engine is inside the browser
-> web apis consists of the some of the following methods which is a part of 
the browser not part of js actually
   -> setTimeout()
   -> DOM APIs
   -> fetch()
   -> local storage()
   -> console
   -> location  etc
-> all those properties can be accessed using global object like
this and window but in our program we are not using it but js takes 
it by default as window.setTimeout() etc
-> the timeout method after completing the time it is stored in the 
call back queue : stores all the callback functions
-> event loop is used to check if whether a functions are present or not in the 
call back queue are not if yes it is then pushed it into the call stack in order to execute
-> in web apis the call back function will be registered
-> micro task queue is similar to callback queue but it has more proirrity
-> task come in microtask queue will be executed first and then the functions in the call back queue
-> only when the call stack is empty then only the functions present in the queues will be executed
till then the code in the js will be keep on executing after that when it is empty than the functions present 
in the microtask queue and callback queue functions will be executed
-> microtask queue : 
   -> promises and mutation
-> rest all callback functions come under the callback queue
-> web apis has methods and properties that can extend the functionality of 
browser
-> in short it is build - in browser features that allow js to interact with
the different parts of the web page

*/

// Fetch api example
fetch('https://api.example.com/data')
   .then(response => response.json())
   .then(data => console.log(data));

/*

-> fetch is used as api to get the data from the server and after getting the data in the form
of json format it will print the data


*/
   