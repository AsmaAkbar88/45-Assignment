// Exercise 43

function show_magicians( magicians: string [])

{magicians.forEach(name => console.log(name));
    
}

function make_great( magicians: string [])
{
    return magicians.map(name =>  `The Great ${name}`)
}
let magician_Name = ["Junaid Jamseed", "Yasie Ahmed", "usman"]

// make a copy of original array 
let copy_magicians = magician_Name.slice()
 

let copy_great_Magician = make_great(copy_magicians)

// Original
console.log("Original Array \n ")
show_magicians(magician_Name);
 
// Copied
console.log("Copy Array \n ")

show_magicians(copy_great_Magician)