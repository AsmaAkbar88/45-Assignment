"use strict";
// exercise 3
let personName = ("Asma Akbar");
// Upper Case 
console.log("Upper case: ", personName.toUpperCase());
// Lower Case
console.log("Lower Case: ", personName.toLowerCase());
// Title Case 
console.log("Title Case: ", personName.replace(/\b\w/g, (xyz) => xyz.toUpperCase()));
