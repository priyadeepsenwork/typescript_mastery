"use strict";
function uniqueData(item, def) {
    return [item, def];
}
const dog1 = uniqueData({
    name: "Jupiter",
    breed: "Husky",
}, {
    name: "Default",
    breed: "native",
});
console.log(dog1);
const getRandomKeyValuePair = (obj) => {
    const keys = Object.keys(obj);
    const randKey = keys[Math.floor(Math.random() * keys.length)];
    return { key: randKey, value: obj[randKey] };
};
const stringObj = { a: 'apple', b: 'banana', c: 'cherry' };
const result = getRandomKeyValuePair(stringObj);
console.log(result);
const filterArray = (array, condition) => {
    return array.filter((item) => condition(item));
};
const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNum = filterArray(numberArray, (num) => num % 2 === 0);
//console.log(evenNum)
const stringArr = [
    "apple",
    "banana",
    "cherry",
    "date",
    "pie",
    "watermelon",
    "avocado",
    "pea",
    "grape",
];
const shortWords = filterArray(stringArr, (str) => str.length <= 5);
const fruitArray = [
    {
        name: "Apple",
        color: "green",
    },
    {
        name: "Banana",
        color: "yellow",
    },
    {
        name: "Cherry",
        color: "red",
    },
];
const redFruits = filterArray(fruitArray, (fruit) => fruit.color === "red");
//console.log(redFruits)
