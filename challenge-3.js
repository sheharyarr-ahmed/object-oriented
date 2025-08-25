'use strict';
// prototypal inheritance within constructor functions in the working
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`this ${this.make} has speed of ${this.speed}`);
};
Car.prototype.brake = function () {
  this.speed -= 10;
  console.log(`this ${this.make} has speed of ${this.speed}`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 10;
  console.log(
    `this ${this.make} has speed of ${this.speed} with the charge of ${this.charge}`
  );
};
EV.prototype.brake = function () {
  this.speed -= 10;
  console.log(
    `this ${this.make} has speed of ${this.speed} with the charge of ${this.charge}`
  );
};

const Tesla = new EV('tesla', 130, 89);
console.log(Tesla);
Tesla.accelerate();
Tesla.brake();
