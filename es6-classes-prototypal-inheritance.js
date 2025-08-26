'use strict';
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log('your age is', 2025 - this.birthYear);
  }
}
// thats the linking of prototypes of the classes with the use of extends and super keywords
class StudentCl extends PersonCl {
  constructor(firstName, birthYear, course) {
    super(firstName, birthYear); // this super args are the same of the other classes args
    this.course = course;
  }
}

const sheharyar = new StudentCl('sheharyar', 2002, 'software');
console.log(sheharyar);

sheharyar.calcAge();
console.log(StudentCl.prototype);
StudentCl.prototype.WhatCar = function () {
  console.log('I have an Grande');
};
console.dir(StudentCl);
StudentCl.prototype.calcAge = function () {
  console.log(`the age is ${2025 - this.birthYear}`); // this will ovveride the above the calcAge function
};
sheharyar.WhatCar();
sheharyar.calcAge();
