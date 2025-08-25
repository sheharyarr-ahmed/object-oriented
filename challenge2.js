'use strict';
class carUS {
  constructor(speed, make) {
    this.speed = speed;
    this.make = make;
  }
  accelerate() {
    this.speed += 10;
    console.log(`this ${this.make} has speed of ${this.speed}`);
  }
  brake() {
    this.speed -= 10;
    console.log(`this ${this.make} has speed of ${this.speed}`);
  }

  get speedUs() {
    return this.speed / 1.6;
  }
  set speedUs(speed) {
    this.speed = speed * 1.6;
  }
}

const corolla = new carUS(120, 'toyota');
console.log(corolla);

corolla.accelerate();
corolla.accelerate();
corolla.accelerate();
corolla.brake();
console.log(corolla.speedUs);
console.log((corolla.speedUs = 175));
console.log(corolla);
