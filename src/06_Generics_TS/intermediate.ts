
function uniqueData<T>(item: T, def: T): [T, T] {
  return [item, def];
}

interface Dog {
  name: string;
  breed: string;
}

const dog1 = uniqueData<Dog>(
  {
    name: "Jupiter",
    breed: "Husky",
  },
  {
    name: "Default",
    breed: "native",
  }
);

console.log(dog1)



const getRandomKeyValuePair = <T>(obj: { [key: string]: T }): {
    key: string; 
    value: T;
    } => {
        const keys = Object.keys(obj)
        const randKey = keys[Math.floor(Math.random() * keys.length)]
        return {key: randKey, value: obj[randKey]}
};


const stringObj = {a: 'apple', b: 'banana', c: 'cherry'}
const result = getRandomKeyValuePair<string>(stringObj)
console.log(result)


const filterArray = <T>(array: T[], condition: (item: T) => boolean): T[] => {
  return array.filter((item) => condition(item));
};

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNum = filterArray<number>(numberArray, (num) => num % 2 === 0);
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
const shortWords = filterArray<string>(stringArr, (str) => str.length <= 5);
//console.log(shortWords);

interface Fruit {
  name: string;
  color: string;
}

const fruitArray: Fruit[] = [
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


const redFruits = filterArray<Fruit>(fruitArray, (fruit) => fruit.color === "red")
//console.log(redFruits)
