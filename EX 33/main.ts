// Exercise 33

let numbers : number [] =[1,2,3,4,5,6,7,8,9,10]
for (let number2 of numbers ) {
if (number2 === 1) {
    console.log(`${number2}st`)  //1st
}else if (number2 === 2) {
    console.log(`${number2}nd`)  //2nd
}else if (number2 === 3) {
    console.log(`${number2}rd`)  //3rd
}else{
    console.log(`${number2}th`)   //4th, 5th, 6th, 7th, .......
}
}