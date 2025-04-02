"use strict";
const printUserInfo = (user) => {
    return `Name: (${user.name}) Age: (${user.age}) Location: (${user.location} Email: (${user.email}))`;
};
const res = printUserInfo({ name: "Priyadeep Sen", age: 21, location: "India", email: "work.priyadeepsen@gmail.com" });
console.log(res);
