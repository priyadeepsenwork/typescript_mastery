"use strict";
/*
 *Arrays are a type of object that can store multiple
 *values of the same data type. Arrays in TypeScript
 *are types, i.e. we can specify the type of value
 *it can hold.
 */
const nums = [1, 2, 3, 4, 5];
const strn = ["Hi", "Hello", "Hey"];
//console.log(nums);
//console.log(strn);
const items = [];
items.push("Keyboard");
//console.log(items);
//? Multiple-Type Value type Array
const numList = [];
numList.push(20);
numList.push("Lion");
//console.log(numList);
//? Multi-dimensional/Nested Array
const list1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(list1);
