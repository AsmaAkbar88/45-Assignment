// Exercise 44 

// Define a function with rest preameter 

function make_Sandwich(...items:string[]){
    console.log(" \n make a Sandwich with the following items")
    items.forEach(singleitems => console.log(singleitems))
    console.log("\n Now Enjoy Sandwich")

}
// call the function 3 items with 3 different name of arguments
make_Sandwich("chicken", "Cheese", "Mayo", "Egg" )
make_Sandwich("Bread", "Butter")
make_Sandwich("Bread", "Butter", " Mayo", "Egg", "Cheese")