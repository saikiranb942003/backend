/*
-> after js version 5, most of the jquery utilities can be solved 
with the few lines of standard js.
-> 
*/
// find html element by id

// jquery
/* 
myElement = $("#id01");
myElement = document.getElementById("id01");

//by using tag name
myElements = $("p");

myElements = documents.getElementsByTagName("p");

//finding html elements by css selectors

myElements = $("p.intro");
myElements = document.querySelectorAll("p.intro");

// set text content
myElement.text("Hello sweden");
myElement.textContent = "hello sweden";

// set html content
myElement.html("<p>hello world</p>");
myElement.innerHTMl = "<p>hello world</p>";

// get html content
content = myElement.html();
content = myElement.innerHTML;


//javascript :

-> it is the core language of the web
-> gives us full control over browser behavior, DOM manipulatin, events etc
-> more powerful and flexiable 
-> we can use it in the browser (no extra libraries are needed)
-> it is faster in performance
-> it is a language
-> it does not require any dependencies
-> older js code needed lot of compatibility checks
-> uses fetch() or XMLHttpRequest 
-> we call methods seperatly unless we build our own chaining logic


// Jquery

-> it is a library in the javascrit
-> it is used to simpify common js tasks like DOM manipulation, event handling
animations, Ajax etc
-> in js we have to write more code to do the same thing
but using this it can be done in a easy way
->we write less syntax that is less code to write
-> it is slower compared to js
-> it is a library
-> it requires jQuery library
-> it is not so popular now
-> it was created specially for browser differences - works consistently 
across all browsers
-> has buid-in $.ajax(), $.get(), $.post() which are simpler to use
-> supports method chaining by default


// eg :
$("#myDiv").hide();




*/

