'use strict';
// static methods are those methods which are applied on the constructor itself not on the inherited ones, for example we added an functiion with in the class
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log('your age is', 2025 - this.birthYear);
  }
  // helper function, only the constructor can call this like in this case is the personcl not teh other objects which are created through the personcl function like sheharyar
  static greet() {
    console.log('hey there');
    console.log(this);
  }
}

console.log(PersonCl);
console.log(PersonCl.prototype);

const sheharyar = new PersonCl('sheharyar', 2002);
console.log(sheharyar);
sheharyar.calcAge();

const shareef = new PersonCl('shareef', 2002);
console.log(shareef);
// shareef.greet(); this will not work because shreef is an instance not an cinstructor but the personCl is an constructor
PersonCl.greet();
