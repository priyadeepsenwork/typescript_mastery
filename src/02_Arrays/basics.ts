/*
 *Arrays are a type of object that can store multiple
 *values of the same data type. Arrays in TypeScript
 *are types, i.e. we can specify the type of value
 *it can hold.
 */

const nums: number[] = [1, 2, 3, 4, 5];
const strn: string[] = ["Hi", "Hello", "Hey"];
//console.log(nums);
//console.log(strn);

const items: string[] = [];
items.push("Keyboard");
//console.log(items);

//? Multiple-Type Value type Array
const numList: any[] = [];
numList.push(20);
numList.push("Lion");
//console.log(numList);

//? Multi-dimensional/Nested Array
const list1: any[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log(list1);
