/*
localStorage.setItem('name' , 'kiran');
localStorage.setItem('place', 'chittoor');


// console.log(localStorage.getItem('place'));
// localStorage.removeItem('name');// to remove an key and value pair

localStorage.clear(); // to clear all the local storage data
*/
// session storage
/*
sessionStorage.setItem('name' , 'kiran');
sessionStorage.setItem('place', 'chittoor');


 console.log(sessionStorage.getItem('place'));
 sessionStorage.removeItem('name');// to remove an key and value pair

sessionStorage.clear(); // to clear all the local storage data
*/
// cookie
/*
// // Set a cookie
document.cookie = "userName = sai kiran; expires =Fri, 30 jun 2025 12:00:00 UTC";
// diaplay cookie o a console
console.log(document.cookie); // output : userName=sai kiran

document.cookie = "testCookie=helloWorld;  expires=Tue, 31 Dec 2025 23:59:59 GMT";
console.log(document.cookie); // output : testCookie=helloWorld 

// delete a cookie

 document.cookie = "testCookie=; ; expires=tue, 31 dec 2024 23.59.50 GMT";
 console.log(document.cookie);
*/

// Set the cookie
document.cookie = "testCookie=helloWorld; path=/; expires=Tue, 31 Dec 2025 23:59:59 GMT";

// Delete the cookie
 document.cookie = "testCookie=; path=/; expires=Thu, 01 Jan 2024 00:00:00 GMT";

// Check result
console.log(document.cookie); // testCookie should be gone






