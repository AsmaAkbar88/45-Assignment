// Exercisse 42
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
var magician_Name = ["Junaid Jamseed", "Yasie Ahmed", "usman"];
// call make_great function to modify magician name 
var great_magician = make_great(magician_Name);
show_magicians(great_magician);
