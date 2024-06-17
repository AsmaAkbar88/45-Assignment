"use strict";
// EX 17: 
let guestList1 = ["Anum", "Shabana", "Yasir", "Ayaz", "Zoya", "Ali"];
console.log("\n Unfortunately, the new dinner table won't to arrive on time, \n \n So i can only invite two Guest to Dinner with me \n ");
while (guestList1.length > 2) {
    let removeGuest = guestList1.pop();
    console.log(`Sorry ${removeGuest}I can't invite you to dinner`);
}
console.log("\n \n Invitation to the last 2 Guest \n \n");
for (let i = 0; i < guestList1.length; i++)
    console.log(` luckly ${guestList1}, You are still invited to dinner`);
guestList1.pop();
guestList1.pop();
console.log(" Empty List,", guestList1);
