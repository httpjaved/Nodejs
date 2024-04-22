const SuperHero = require("./super-hero");

const batman = new SuperHero("batman");
console.log(batman.getName());
batman.setName("bruce way");
console.log(batman.getName());

const superman = new SuperHero("superman");
console.log(superman.getName());
