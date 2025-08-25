'use strict';
// this is called an constructor function
// in constructor function there is only function declaration and function expression, no arrow function. The constructor function's name is started with capital letter. When constructor function is called the new keyword is used. the properties inside the constructor function are called instance properties. here in this example of the sheharyar is an instance of the person. on the execution of the contructor function following are happening:
// 1 new empty object {} is created
// 2 when constructor function is called, this =  empty object {}
// 3 that empty object{} is linked to prototype
// 4 function automatically return {}
const Person = function (firstName, birthYear) {
  //instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
  //   methods can also be palced in the constructor function but this is an bad practice.
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

const sheharyar = new Person('sheharyar', 22);
console.log(sheharyar);
const hira = new Person('hira', 37);
console.log(hira);

console.log(sheharyar instanceof Person);
/////////////////
/////////////////
// prototypes or prototypal inheritance
// .protoytpe is applied on constructor function
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

//setting an property in the prototype
Person.prototype.nationlaity = 'Pakistani';
console.log(Person.prototype);
console.log(sheharyar.nationlaity); //this property is not actually added in the sheharyar object but in its prototype.
console.log(sheharyar.__proto__);
console.log(sheharyar.hasOwnProperty('nationality')); // property from prototype
console.log(sheharyar.hasOwnProperty('firstName')); //property from actual obejct

//function, array, prototypes all are objects therefore they all have their prototypes.
// now we got to know that every function, array is an object and every object has prototype
console.log(sheharyar.__proto__); //this returns an object and when we apply .__proto to this returned object it will return object prototype
console.log(sheharyar.__proto__.__proto__);

const arr = [1, 2, 3, 4, 4, 5, 56, 6, 6, 7];
console.log(arr.__proto__); //proves is an obejct and it also has an prototype
console.log(Array.prototype); //here we used .prototype because array is an built method.
console.log(arr.__proto__.__proto__); //the object's prototype

// now adding an new method in the array's prototype
Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr);
console.log(arr.__proto__); //shows the added function added in the array's prototype
console.log(arr.unique());

console.log(Person.prototype.constructor); //seeing the constructor function
// console.log(Array.prototype.constructor); //seeing the constructor function
const h1 = document.querySelector('h1');
console.log(h1.__proto__);
console.dir(x => x + 1);

// got to know about the static function
