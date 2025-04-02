"use strict";
const throwError = (message) => {
    throw new Error(message);
};
const infinity = () => {
    while (true) { }
};
let x;
const neverReturn = () => {
    while (true) { }
};
x = neverReturn();
