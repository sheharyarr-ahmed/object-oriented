'use strict';
// this is called an constructor function
// in constructor function there is only function declaration and function expression, no arrow function. The constructor function's name is started with capital letter. When constructor function is called the new keyword is used. the properties inside the constructor function are called instance properties. here in this example of the sheharyar is an instance of the person. on the execution of the contructor function following are happening:
// 1 new empty object {} is created
// 2 when constructor function is called, this =  empty object {}
// 3 that empty object{} is linked to prototype
// 4 function automatically return {}
const Person = function (firstName, birthYear) {
  //instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
  //   methods can also be palced in the constructor function but this is an bad practice.
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

const sheharyar = new Person('sheharyar', 22);
console.log(sheharyar);
const hira = new Person('hira', 37);
console.log(hira);

console.log(sheharyar instanceof Person);
