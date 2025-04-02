"use strict";
const person = {
    name: "Priyadeep",
    age: 21,
    address: "West Bengal, India"
};
console.log(person.name);
console.log(person.age);
console.log(person.address);
//=========================================
const printUserOnly = (name, age) => {
    return {
        name: 'Priyadeep',
        age: 21
    };
};
console.log(printUserOnly(person.name, person.age));
