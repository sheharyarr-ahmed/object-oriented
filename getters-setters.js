'use strict';
// adding getter and setters in the regular object
const account = {
  owner: 'sheharyar',
  movements: [200, 500, 8000],

  //   making of the get method in the object
  get latest() {
    return this.movements.slice(-1).pop();
  },
  //  making of the set method in the object
  set latest(mov) {
    this.movements.push(mov);
  },
};
// when the get or set emthod is called we dont put () at the end because both get and set acts as properties not methods
console.log(account.latest);
account.latest = 10000;
console.log(account.movements);

// adding getters and setters in the  classes
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log('your age is', 2025 - this.birthYear);
  }

  get Name() {
    console.log(this._fullName);
  }
  // here what we did we put the name of the setter as one of the constructors argumemt so late we replace it with the name but while changing it to name we did _fullName = name and this will also br chnaged in the actual obejct as well
  set fullName(name) {
    //added an function that if the space is not added between the name then alert pops up
    // if (name.includes(' ')) this._fullName = name;
    // else alert(`${name} is not an full name`);
  }
  set NewName(name) {
    this.fullName = name;
  }
}

const sheharyar = new PersonCl('sheharyar ahmed', 2002);
console.log(sheharyar);
sheharyar.Name;
// sheharyar.fullName = 'asad khan';
console.log(sheharyar);
sheharyar.NewName = 'asid';
console.log(sheharyar);

// just practicing
// const movements = [200, 500, 8000];
// console.log(movements.slice(-1));
// // console.log(movements);
// console.log(movements.slice(-1).pop());
// console.log(movements.pop()); // returns the last element
