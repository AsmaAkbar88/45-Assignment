//EX 18:  

// start Now


// Making a Array of countries and Print its Original Order
let countriesToVisit = ["China","India","Pakistan","Austrila","Bangladaish"]

console.log("Original Order: ", countriesToVisit);

// Print the Array in Alphabetical order without modifying the actual Array list
console.log("Alphabetical Order: ",[...countriesToVisit].sort() );
 
// Show that the array is still in its original order;
console.log("Still in Original Order: " , countriesToVisit);

// Print the Array in Rversed order:
console.log("Reverse Order : " ,[...countriesToVisit].reverse() );

// Show that the array is still in its Original Order;
console.log("Still in Original Order: ", countriesToVisit);

// we have changed the original Array Order Now;
console.log("Original Array Reversed: ", countriesToVisit.reverse() );

// Print the array to show that it's back to list original order
console.log("Back to Original Order: ", countriesToVisit.reverse());

// Print the array to show that its order has been changed in Alphabetical Order now;
console.log("Sorted in Alphabetical Order: ", countriesToVisit.sort());

console.log("Original Array Reversed Again: ", countriesToVisit.reverse());


