/*
? Interface is a way to define a contract for the shape of an object.
? It specifies the properties and their types that an object must have.
? Almost everything on Javascript is an Object and Interface is built to match their Runtime Behaviour.
? Interfaces in Typescript can also be used to describe the shape of functions and classes
! interface is a reserved keyword...
*/

//* Structure for interface of an Object
interface Person {
  firstName: string;
  lastName: string;
  age: Number;
}

// const myself: Person = {
//   firstName: "Priyadeep",
//   lastName: "Sen",
//   age: 21,
// };

//console.log(myself)

//* Structure for interface of a function
interface MathOperation {
  (x: number, y: number): number;
}

const add: MathOperation = (a, b) => a + b; // function add
const subtract: MathOperation = (a, b) => a - b; //function subtract
const multiply: MathOperation = (a, b) => a * b; //function multiply
const divide: MathOperation = (a, b) => a / b; //function divide 

const array_result : number[] = [add(15, 15), subtract(60, 24), multiply(9, 9), divide(660, 11)]
//console.log(`The Results are in succession: ${array_result}`)

//console.log(add(10, 8))
//console.log(subtract(50, 25))

interface Computer {
  name: string;
  ram: number;
  ssd: number;
}

const myPc: Computer = {
  name: "Macbook Pro M4 Max",
  ram: 96,
  ssd: 2048,
};

interface Movie {
  readonly name: String;
  ratings: number;
  genre?: string;
}

const firstMovie : Movie = {
    name: "The Conjuring",
    ratings: 9.1,
    genre: "Horror"
}

//console.log(firstMovie.name)

//firstMovie.name = 'Star Ward'
//* Cannot assign to 'name' because it is a read-only property.

interface Person {
    firstName: string,
    lastName: string,
    phone: number,
    sayHello(): void, //function inside an interface
}

const greets = (person: Person) => {
    console.log(`Hello, ${person.firstName} ${person.lastName}`)
    person.sayHello() //calling the function
}

const mySelf: Person = {
    firstName: 'Priyadeep',
    lastName: 'Sen',
    age: 21,
    //the function definition in the object
    sayHello() {
        console.log('Hi there!')
    },
    phone: 8888899999 //not my number hehe, idk whose it is....
}

const mySelf2: Person = {
    firstName: 'Jishu',
    lastName: 'Sengupta',
    age: 22,
    sayHello() {
        console.log('Wats good?')
    },
    phone: 8888899999 //not my number hehe, idk whose it is....
}

greets(mySelf)
greets(mySelf2)

