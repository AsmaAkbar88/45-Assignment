"use strict";
// Exercise  14: 
// Method 1
let guestList = ["Anum", "Shabana", "Yasir", "Ayaz"];
guestList.forEach(g => console.log("Salam", g, "would you like to dinner with me??"));
// Method 2
let guestList2 = ["Anum", "Shabana", "Yasir", "Ayaz"];
for (let i = 0; i < guestList2.length; i++)
    console.log(`SIR/Madam ${guestList2[i]} we invited you on dinner tommorrow,

Would you like to dinner with me? \n`);
