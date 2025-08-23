'use strict';
/////////////////
/////////////////
// prototypes or prototypal inheritance
console.log(Person.prototype); //here we are checking that as of now the prototype of the contructor function is empty, not containing any method.
//adding an method in the person constructor function but in its prototype not actually in the person's constructor function
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
console.log(Person.prototype); // now we can see that the prototype of the person constructor function now has an method calcAge but still the actual person constructor obejct does not have any method.
sheharyar.calcAge();
console.log(sheharyar); //now here in the console the sheharyar object will not show the age but the sheharyar,s prototype shows it contain calcAge fucntion.

//to see sheharyar's prototype
console.log(sheharyar.__proto__); //it says sheharyar's prototype has calcage function.
console.log(sheharyar.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(sheharyar)); // tells that sheharyar's prototype was created from person's prototype.
console.log(Person.prototype.isPrototypeOf(Person)); //false the person was created from using the person's prototype.
