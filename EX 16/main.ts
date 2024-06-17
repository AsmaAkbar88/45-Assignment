// EX 16: 

// start Now:

// Creating a Guest List Array:

let guestList1 = ["Anum","Shabana","Yasir", "Ayaz"];

// let dontCome2 = guestList1[2]

// guestList1.splice(2,1,"Babar Azam")

// Message Print for Bigger Table

console.log("\n Good News! we have found a Bigger Table for Dinner \n")


// Adding a new Guest at starting index of Array
guestList1.unshift("Ali");


// Adding a new Guest at ending index of Array
guestList1.push("Amir");

// making a veribale for storing a middle index of our Guest list Array:
let middleIndus: number = Math.floor(guestList1.length / 2);

// Adding a new Guest to middle index of Array
 guestList1.splice(middleIndus, 0, "Anumta")

//  Print Message of Update List
 console.log("\n Updated List of our Guest \n");


//  Sending a invitation message to our Guest one
guestList1.forEach( t => console.log(`Salam ${t} whould you like to dinner with me? `))
