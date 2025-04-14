/*
-> Event bubbling in js tells how events travel through the dom (document object model)
-> when an event is trigged on a element it first runs on that element and then moves up through the ancestors
of the DOM tree
*/



document.querySelector("#grandparent")
.addEventListener('click', () => {
    console.log("grandparent clicked");
    
});

document.querySelector("#parent")
.addEventListener('click', () => {
    console.log("Parent clicked");
    
});
/*
document.querySelector("#child")
.addEventListener('click', () => {
    console.log("child clicked");
    
});

/*
-> for eg in the above code when we click on child div it first triggers the child div and then bubbles up 
to its parent and then grandparent
-> that is all the three codes will be executed one after the other 
-> without calling explicitly all three div will be executed in that herierchy
-> Default behaviour in javascript is bubbling (not capturing)

-> Useful for event delegation where we attach one handler to a parent insted of many to individual children

*/

// we can stop bubbling using event.stopPropagation()


document.querySelector("#child")
  .addEventListener('click', (event) => {
      event.stopPropagation();   // stops event from reaching parent
      console.log("child clicked");
     
  });
  
  




