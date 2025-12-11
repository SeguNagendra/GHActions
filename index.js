const _ = require('lodash');

function sum(a, b) {
  return a + b;
}

console.log("Matrix demo app running...");
console.log("Lodash version:", _.VERSION);

module.exports = { sum };
