// Ex 15 : 
// Method 1

// Creating a Guest List Array:
let guestList1 = ["Anum","Shabana","Yasir", "Ayaz"];

// Making varible for those guest who cant come:
let dontCome2 = guestList1[2]

// Add & Remove values from  Guest List in Aarry
guestList1.splice(2,1,"Babar Azam")

for(let i=0; i<guestList1.length; i++)
    console.log(`Salam ${guestList1[i]} whould you like to dinner with me? `)



