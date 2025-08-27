'use strict';
// OBJECT .CREATE
// to set an object's prototype to an specific obejct
// creating an object.
const obj = {
  greet() {
    console.log('hey, there');
  },

  function2() {
    console.log('this is the second function');
  },
};
// what we did here that we set the sarah;s prototype to obj
const sarah = Object.create(obj);
console.log(sarah);
console.log(sarah.__proto__);
// thus sara object can inherit its prototype's function
sarah.function2();
