'use strict';
// in this we study about the ENCAPSULATION and the follwoing four things:
// 1. public fields
// 2. private fields(#) //cannot be accessed from outside. cannot be read or mutated from outside the class.
// 3. public methods
// 4. private methods(#)

class Account {
  locale = navigator.language; //example of an public field that needs to be in every account's instance
  bank = 'Bankist';
  #movements = [];
  #pin;
  constructor(name, pin) {
    (this.name = name),
      //   (this.locale = navigator.language), // was written above as an public field
      //   (this.movements = [100, 200, 300]); //made it private above
      (this.#pin = pin);
  }

  getMovements() {
    //an example of public method
    return this.#movements;
  }

  #approveLoan(val) {
    //an examle of private method
    return true;
  }

  deposit(val) {
    this.#movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`loan approved of rupees, ${val}`);
    }
  }
}

const acc1 = new Account('sheharyar', 111);
console.log(acc1);
// console.log(acc1.movements);
// acc1.movements = []; // this should not happen so therefore we make it private, by puting the #movements
// console.log(acc1.movements);
acc1.deposit(2000);
acc1.withdraw(500);
console.log(acc1);
console.log(acc1.movements); //cannot be visible nor acnnot be accessed
// console.log(acc1.#movements);
// console.log(acc1.#pin);
acc1.requestLoan(200);
console.log(acc1);
// acc1.#approveLoan(300);
