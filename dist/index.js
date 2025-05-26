"use strict";

var greet = function greet() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'developer';
  console.log("hello ".concat(name));
};
greet('world');