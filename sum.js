// by default module protect its functions and variables

console.log("code from sum");

var a = 100;

 function sum(a, b) {
  console.log( a + b);
}

module.exports = {sum, a}; // exports with s
