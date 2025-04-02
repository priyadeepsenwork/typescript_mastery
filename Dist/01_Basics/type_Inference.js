"use strict";
/*
Its a technique where the TS-Compiler
automatically determine the type of the
variable based on its value.
*/
let tech = "Typescript";
//* tech = 19  --> this will WORKany-type in Javascript
tech = "Priyadeep Sen";
//console.log(tech)
//console.log(typeof tech)
let str = "JS Mastery";
let nomm = 1000;
let isChecked = true;
console.log(str);
console.log(nomm);
console.log(isChecked);
//! yikes! any-type in TS: any-value, disable type-checking.....bad practice!
let color = "crimson";
color = 20;
color = true;
color = 788.435;
color = () => {
    return 69;
};
console.log(`(any-type) output -> ${color()}`);
