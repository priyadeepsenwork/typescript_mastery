"use strict";
/*
* Type-Narrowing is the process of refining a variable's type within a conditional
* block of code. This allows us to write more precise and type-safe code.
*
* Mechanisms for narrowing types:
* a) Type Guards, b) The instance of Operator, c) Intersection types
*
* Type Guards are mechanisms that help TS understand and narrow down the types
* more precisely. Example: 'typeOf' operator
*/
const exampleFun = (value) => {
    if (typeof value === 'string') {
        console.log(`String is : ${value.toUpperCase()}`);
    }
    else {
        console.log(`Number is : ${value}`);
    }
};
exampleFun(69);
exampleFun('JS Mastery');
