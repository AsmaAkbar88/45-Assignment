// Exercisse 42

function show_magicians( magicians: string [])

{magicians.forEach(name => console.log(name));
    
}

function make_great( magicians: string [])
{
    return magicians.map(name =>  `The Great ${name}`)
}

let magician_Name = ["Junaid Jamseed", "Yasie Ahmed", "usman"]

// call make_great function to modify magician name 

let great_magician = make_great(magician_Name)


show_magicians(great_magician)