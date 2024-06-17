"use strict";
// task # 24
// Equailty 
let nam1 = "Aqib";
let nam2 = "Azan";
let nam3 = " Khursheed";
console.log("\n Is nam1 is equal to Aqib??");
console.log(nam1 == "Aqib");
console.log("\n Is nam2 is equal to Azan??");
console.log(nam2 != "Azan");
//    lower case function
let upperCase2 = "AQIB RAHSEED";
console.log("\n AQIB RASHEED Is converting LowerCase;  ");
console.log(upperCase2.toLocaleLowerCase());
// Numerical tests
let age = 18;
let age2 = 25;
console.log("\n Is age is equal to 18??");
console.log(age == 18);
console.log("\n Is age2 is NOT equal to 25??");
console.log(age2 != 25);
console.log("\n Is age2 25 is greater than to age1 18??");
console.log(age2 > age);
console.log("\n Is age 18 is greater than to age1 25??");
console.log(age > age2);
// GREATER THAN EQUAL
console.log("Is 25 is greater than OR equal to 5");
console.log(25 >= 5);
console.log("Is 28 is greater than OR equal to 25");
console.log(28 <= 25);
// Using && ,OR
console.log("\n Is age 18 is not equal to age2 25 && age2 25 is greater than to age 18??");
console.log(age != age2 && 25 > 18);
console.log("\n Is age  is  equal to 18  && age2  is not equal to  age 25??");
console.log(age == 18 && age2 != 25);
console.log("\n Is age 18 is not equal to age2 25 OR age2 25 is greater than to age 18??");
console.log(age != age2 || 25 > 18);
console.log("\n Is age  is  equal to 18  OR age2  is not equal to  age 25??");
console.log(age == 18 || age2 != 25);
// using Array
let fruits = ["apple", "Orange", "Mango"];
if (fruits.includes("Orange"))
    console.log("Is orange is include in my fruits array ");
let fruits3 = ["apple", "Orange", "Mango"];
if (!fruits3.includes("apple"))
    console.log("Is apple is not include in my fruits array");
