function create_car( manufacturer, model, ...opitions)
{
    let car = {
        
        manufacturer: manufacturer,
        
        model: model,
    };

// add aditional opition to the car object 

opitions.forEach(ABC => {
    let[key, value] = ABC.split(":");
    car[key. trim()]= value.trim();


});
return car;
}

// call the function to creat a car object. 
let my_car = create_car( "Toyota", "Corrolla", "Color: Black", "sunroof: Black", "Year: 2024");
//  print verible 

console.log (my_car);

