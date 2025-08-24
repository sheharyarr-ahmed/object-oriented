'use strict';
// there are two method sto create classes
// 1. class expression
// 2. class declaration

//class expression
// const PersonCl = class {};

// class declaration
class PersonCl {
  // thats the object part which we created just like in the constructor function
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  //   out of the above part here we declares the functions/methods and this part is just like adding the methods in the PersonCl's prototype
  calcAge() {
    console.log('your age is', 2025 - this.birthYear);
  }
}

console.log(PersonCl);
console.log(PersonCl.prototype);
// console.log(PersonCl.__proto__);// this will not work

const sheharyar = new PersonCl('sheharyar', 2002);
console.log(sheharyar);
sheharyar.calcAge();
