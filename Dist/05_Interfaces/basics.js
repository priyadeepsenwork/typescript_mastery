"use strict";
/*
? Interface is a way to define a contract for the shape of an object.
? It specifies the properties and their types that an object must have.
? Almost everything on Javascript is an Object and Interface is built to match their Runtime Behaviour.
? Interfaces in Typescript can also be used to describe the shape of functions and classes
! interface is a reserved keyword...
*/
const add = (a, b) => a + b; // function add
const subtract = (a, b) => a - b; //function subtract
const multiply = (a, b) => a * b; //function multiply
const divide = (a, b) => a / b; //function divide 
const array_result = [add(15, 15), subtract(60, 24), multiply(9, 9), divide(660, 11)];
const myPc = {
    name: "Macbook Pro M4 Max",
    ram: 96,
    ssd: 2048,
};
const firstMovie = {
    name: "The Conjuring",
    ratings: 9.1,
    genre: "Horror"
};
const greets = (person) => {
    //console.log(`Hello, ${person.firstName} ${person.lastName}`)
    person.sayHello(); //calling the function
};
const mySelf = {
    firstName: 'Priyadeep',
    lastName: 'Sen',
    age: 21,
    //the function definition in the object
    sayHello() {
        //console.log('Hi there!')
    },
    phone: 8888899999 //not my number hehe, idk whose it is....
};
const mySelf2 = {
    firstName: 'Jishu',
    lastName: 'Sengupta',
    age: 22,
    sayHello() {
        //console.log('Wats good?')
    },
    phone: 8888899999 //not my number hehe, idk whose it is....
};
greets(mySelf);
greets(mySelf2);
const song1 = {
    songName: "Answer",
    artist: "Bump of Chicken",
    printSongInfo: (songName, artist) => {
        return `Song: ${songName} - ${artist}`;
    }
};
//console.log(song1.printSongInfo("Answer", "Bump of Chicken"))
