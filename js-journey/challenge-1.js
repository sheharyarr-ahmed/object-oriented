'use strict';

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

const corolla = new Car('toyota', 220);
corolla.accelerate();
corolla.brake();
// console.log(corolla.__proto__);

const ferrari = new Car('ferrari', 300);
console.log(ferrari.__proto__); // this will display the two new functions as this obejct is create through the car constructor function and therefore car's prototype do contain two new methods accellerate adn brake.
