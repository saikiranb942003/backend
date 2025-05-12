/*
->in js, a class is a bluprint for creating objects
-> it defines properties and methods that the object created from it will have
-> classes make object oriented programming more intuitive in js

*/

// eg
// Defining a class
class Person {
    // Constructor method - initializes object properties
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    // Method
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Creating an object (instance) of the class
const person1 = new Person("sai", 23);
person1.greet(); // Output: Hello, my name is sai and I am 23 years old.
