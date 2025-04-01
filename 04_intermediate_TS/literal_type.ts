//* string literal types

let colors: "Yellow" | "Red" | "Blue"
colors = "Red" //? valid
colors = "Blue" //? valid
//colors = "Magenta" //? Invalid!
console.log(colors)

//* number literal types
let num1: 2 | 4 | 6 | 8 | 10
num1 = 6 //? Valid
num1 = 10 //? valid
//num1 = 5 //? Invalid

//let my_password: "secretPassword" = "secretPassword"
//const my_password = "secretPassword"
//? Literally both are the exact same.