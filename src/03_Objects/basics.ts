const person: {name: string; age: number; address: string} = {
    name: "Priyadeep",
    age: 21,
    address: "West Bengal, India"
}

console.log(person.name)
console.log(person.age)
console.log(person.address)

//=========================================

const printUserOnly = (name: string, age: number): object => {
    return {
        name: 'Priyadeep',
        age: 21
    }
}

console.log(printUserOnly(person.name, person.age))