/*
 * Generics in Typescript allow us to create reusable components that works
 * with variety of types. Generics make it possible for us to define functions,
 * classes and interfaces that can work with different data types without having
 * to duplicate code.
 */

const printNumber = <T>(item: T, def: T): [T, T] => {
  return [item, def];
};

const printString = (item: string, def: boolean): [string, boolean] => {
  return [item, def];
};

//console.log(printNumber<number>(12, 24));
//console.log(printString("JS Mastery", false));

//? This is a fully reusable component
const printFun = <Type>(item: Type, def: Type): [Type, Type] => {
  return [item, def];
};

const nums1 = printFun<number>(12, 24);
const str1 = printFun<string>("Priyadeep", "Sen");
const bool1 = printFun<boolean>(true, false);

console.log(nums1);
console.log(str1);
console.log(bool1);
