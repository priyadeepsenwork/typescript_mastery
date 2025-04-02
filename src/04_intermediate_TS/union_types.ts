let myVar: number | string = 24;
console.log(myVar);
myVar = "Log";
console.log(myVar);
//?myVar = true --> error as its boolean

let password: string | number = 20;

type userInfo = {
  first: string;
  last: string;
  age: number;
};

type accountDetails = {
  email: string;
  password: string;
};

let store: userInfo | accountDetails = {
  email: "eeee@gmail.com",
  password: "1233@gmail.com",
};

console.log(store);

let itemss: (number | string)[] = [1, 2, 3, 4, 5, "Heya"];
console.log(itemss)
