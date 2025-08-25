'use strict';
// PROTOTYPAL INHERITANCE AMONG THE CONSTRUCTOR FUNCTIONS
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  return console.log(2025 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  //   this.firstName = firstName;
  //   this.birthYear = birthYear; //refactoring
  Person.call(this, firstName, birthYear); //we added this call mehtod we would like to borrow an function which is outside of this object and sets the this keyword manullay because we want to explicitly define them.
  this.course = course;
};
//linking and replacing of prototypes
Student.prototype = Object.create(Person.prototype); //what we will do is that we will manually set the student's prototype as person's prototype in order to apply calcAge method on musaad whose parent class is Person
Student.prototype.introduce = function () {
  console.log(`hi my name is ${this.firstName} and I study ${this.course}`);
};

const musaad = new Student('musaad', 2002, 'bba');
console.log(musaad);
musaad.introduce();

musaad.calcAge(); // because of linkage of prototypes now this will work

console.log(musaad.__proto__);
console.log(musaad.__proto__.__proto__);
console.dir(Student.prototype.constructor);
console.log(Student.prototype.constructor);

console.dir(Student.prototype.constructor); // to fix this

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
