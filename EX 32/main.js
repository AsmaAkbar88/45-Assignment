"use strict";
// Exercise 32
let currentUser = ["Admin", "Eric", "Haseeb", "Rameez", "Laiba"];
let newUser2 = ["admin", "laiba", "Noor", "Aliyan", "Affan"];
newUser2.forEach(newUsr => {
    let our_Condition = currentUser.some(currentOne => currentOne.toLowerCase() === newUsr.toLowerCase());
    if (our_Condition) {
        console.log(`sorry ${newUsr} is already taken`);
    }
    else {
        console.log(`this userName ${newUsr} is avaible`);
    }
});
