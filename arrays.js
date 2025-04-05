// Creating an Array
// 1)
const cars1 = ["Saab", "Volvo", "BMW"];

// 2)
const cars2 = [];
cars2[0]= "Saab";
cars2[1]= "Volvo";
cars2[2]= "BMW";

// 3)
const cars3 = new Array("Saab", "Volvo", "BMW");

// Accessing Array Elements
const cars4 = ["Saab", "Volvo", "BMW"];
let car1 = cars4[0];
// console.log(car1); // saab

// Changing an Array Element
cars4[0] = "Opel";
// console.log(cars4);  // [ 'Opel', 'Volvo', 'BMW' ]

// Converting an Array to a String
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString()); // Banana,Orange,Apple,Mango

// Arrays are Objects
