"use strict";
// Exeercise 38
function describe_city(city, country = "Pakistan") {
    console.log(`${city} is in ${country}`);
}
// calling the function
describe_city("Karachi"); // default city
describe_city("France", "europe");
describe_city("Lahore", " Pakistan"); // default city
