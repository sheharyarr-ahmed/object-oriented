'use strict';
class Account {
  constructor(name, pin, locale, movements) {
    (this.name = name),
      (this.pin = pin),
      (this.locale = navigator.language),
      (this.movements = [100, 200, 300]);
  }

  approveLoan() {
    return true;
  }

  deposit(val) {
    this.movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log(`loan approved of rupees, ${val}`);
    }
  }
}

const acc1 = new Account('sheharyar', 111);
console.log(acc1);
acc1.requestLoan(1000);
