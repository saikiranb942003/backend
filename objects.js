//object methods
//object.assign

/* 
object.assign(target,source) : this method is used to copy the values
of all properties from one or more source objects to a target object
-> in short it is used to merge the one object with the other

/*
var obj1 = {
    fname : "sai",
    lname : "kiran",
    age : 22
}

var obj2 = {
    fname : "madhan",
    lname : "kumar",
    age : 23
}

console.log(Object.assign(obj1,obj2));
 op:
{ fname: 'madhan', lname: 'kumar', age: 23 }

/*

var obj1 = {
    fname : "sai",
    lname : "kiran",
    age : 22
}

var obj2 = {
    fname1 : "madhan",
    lname1 : "kumar",
    age1 : 23
}

console.log(Object.assign(obj1,obj2));

op:
{
  fname: 'sai',
  lname: 'kiran',
  age: 22,
  fname1: 'madhan',
  lname1: 'kumar',
  age1: 23
}
-> it returns objects
note : both the objects should have different key names 
-> or else if all the objects have same key names than js takes the last obj and displays the
output
*/

/* object keys : Object.keys(obj): this method returns an array of the
objects prperty names


var obj = {
    fname : "sai",
    lname : "kiran",
    age : 22
}

console.log(Object.keys(obj));

*/
// op:[ 'fname', 'lname', 'age' ]

// Object.values(obj) :
/* it returns an array of the objects property values

-> it returns in the form of array

*/ 

var obj = {
    fname : "sai",
    lname : "kiran",
    age : 22
}

console.log(Object.values(obj)); // op: [ 'sai', 'kiran', 22 ]




