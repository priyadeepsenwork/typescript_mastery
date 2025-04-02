"use strict";
/*
 * Generics in Typescript allow us to create reusable components that works
 * with variety of types. Generics make it possible for us to define functions,
 * classes and interfaces that can work with different data types without having
 * to duplicate code.
 */
const printNumber = (item, def) => {
    return [item, def];
};
const printString = (item, def) => {
    return [item, def];
};
//console.log(printNumber<number>(12, 24));
//console.log(printString("JS Mastery", false));
//? This is a fully reusable component
const printFun = (item, def) => {
    return [item, def];
};
const nums1 = printFun(12, 24);
const str1 = printFun("Priyadeep", "Sen");
const bool1 = printFun(true, false);
console.log(nums1);
console.log(str1);
console.log(bool1);
