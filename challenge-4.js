'use strict';
// prototypal inheritance within constructor functions in the working
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`this ${this.make} has speed of ${this.speed}`);
  }
  brake() {
    this.speed -= 10;
    console.log(`this ${this.make} has speed of ${this.speed}`);
    return this;
  }
}

class EV extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }
  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `this ${this.make} is going at the speed of ${
        this.speed
      } with a charge of ${this.#charge}%`
    );
    return this;
  }
}

const Haval = new EV('gwm', 130, 80);
console.log(Haval);
Haval.accelerate();
console.log(Haval.charge);
// console.log(Haval.#charge);
Haval.accelerate().accelerate().brake().chargeBattery(12).accelerate();
