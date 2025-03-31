function addOne(num:number) {
    return num + 5
}
let numm = 5
console.log(`Sum -> ${addOne(numm)}`)

const subOne = (num2: number) => {
    return num2 - 10
}

console.log(`Difference -> ${subOne(numm)}`)


const area = (len: number, wid: number) => {
    return len*wid
}
//! by default, function params are of 'any' type

console.log(`Area of Rectangle -> ${area(5,5)}cm^2`)


//* Default Params works as it is...
const greet = (person = 'Anonymous') => {
    return `Hello, ${person}`
}

console.log(greet('Priyadeep Sen')) 



//? Annotating a Function in Typescript

const news = (headline: string = ''): string => {
    return `Todays news is : ${headline}`
}

let headline = `Trump was elected as the 48th president of the United States.`

console.log(news(headline))

