'use strict';
const Person = {
  calcAge() {
    console.log(`${2025 - this.birthYear}`);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
    console.log(`hi iam ${this.firstName} and i was born in ${this.birthYear}`);
  },
};

const Musaad = Object.create(Person);
console.log(Musaad.__proto__);
const StudentProto = Object.create(Person);
const jayz = Object.create(StudentProto);
console.log(jayz.__proto__);
jayz.init('sheharyar', 2002);
