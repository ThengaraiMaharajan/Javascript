// creating objects in JS
// 1) Using an Object Literal
// // An object literal is a list of name:value pairs inside curly braces {}
const person = {
    firstName:"John", 
    lastName:"Doe", 
    age:50, 
    eyeColor:"blue"
};
// console.log(person);

const person1 = {};
person1.firstName = "Jane";
person1.lastName = "Doel";
person1.age = 49;
person1.eyeColor = "pink";
// console.log(person1);

// 2) Using the new Keyword
// // This example create a new JavaScript object using new Object()
// Create an Object
const newPerson = new Object();

// Add Properties
newPerson.firstName = "new John";
newPerson.lastName = "new Doe";
newPerson.age = 51;
newPerson.eyeColor = "new blue";
// console.log(newPerson);

// You can access object properties in two ways:
// console.log(person.lastName);
// console.log(newPerson["lastName"]);

// methods 
const methodPerson = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    },
    greetUser : function() {
        return 'Hello there '+ ' ' + this.firstName + " " + this.lastName;
    }
};
// console.log(methodPerson.fullName()); // John Doe
// console.log(methodPerson.greetUser()); // Hello there  John Doe

// Objects are mutable: They are addressed by reference, not by value.
// If person is an object, the following statement will not create a copy of person:
const x = person;
// The object x is not a copy of person. The object x is person.
// The object x and the object person share the same memory address.
// Any changes to x will also change person




// An Object is an Unordered Collection of Properties
// Properties are the most important part of JavaScript objects.
// Properties can be changed, added, deleted, and some are read only.

// Accessing JavaScript Properties
let age = person.age;
let age1 = person["age"];
let x1 = "firstName";
let y1 = "age";
const statement = person[x1] + " is " + person[y1] + " years old.";
// console.log(statement);
// You can add new properties to an existing object by simply giving it a value
person.nationality = "English";
// console.log(person.nationality);
// The delete keyword deletes a property from an object
delete person.age;
delete person["nationality"];
// console.log(person.age); // undefined
// console.log(person.nationality);// undefined
// The delete keyword deletes both the value of the property and the property itself.
// After deletion, the property cannot be used before it is added back again.

// Nested Objects
const myObj = {
    name:"John",
    age:30,
    myCars: {
      car1:"Ford",
      car2:"BMW",
      car3:"Fiat"
    }
}
// console.log(myObj.myCars.car2);       // BMW
// console.log(myObj.myCars["car2"]);    // BMW
// console.log(myObj["myCars"]["car2"]); // BMW
let p1 = "myCars";
let p2 = "car2";
// console.log(myObj[p1][p2]);

person.name = function () {
    return this.firstName + " " + this.lastName;
};
// console.log(person.name); // returns function statement
// console.log(person.name()); // returns function output

person.nameOps = function () {
    return (this.firstName + " " + this.lastName).toUpperCase();
};
// console.log(person.nameOps()); // returns function output

// Displaying Objects 

// 1) Displaying the Object Properties by name
// console.log(person.firstName); // John

// 2) Displaying the Object Properties in a Loop
let statement1 = "";
for (let x in person) {
  statement1 += person[x] + " ";
};
// console.log(statement1); // 
                         // John Doe blue function () {
                         //     return this.firstName + " " + this.lastName;
                         // } function () {
                         //     return (this.firstName + " " + this.lastName).toUpperCase();
                         // }

// 3) Displaying the Object using Object.values()
const myArray = Object.values(person);
// console.log(myArray);
// // Using Object.entries()
const fruits = {Bananas:300, Oranges:200, Apples:500};
let statement2 = "";
for (let [fruit, value] of Object.entries(fruits)) {
  statement2 += fruit + ": " + value + ",";
}
// console.log(typeof statement2); // string
// console.log(statement2);        // Bananas: 300,Oranges: 200,Apples: 500,

// 4) Displaying the Object using JSON.stringify()
let myString = JSON.stringify(person);
// console.log(myString);


// JavaScript Object Constructors
// // Sometimes we need to create many objects of the same type.
// // To create an object type we use an object constructor function.
// // It is considered good practice to name constructor functions with an upper-case first letter.

function Employee(first, last, dept, seniority) {
    this.firstName = first;
    this.lastName = last;
    this.dept = dept;
    this.seniority = seniority;
    this.nationality = "Indian"; // default propoerty;
    this.fullName = function() {
        return this.firstName + " " + this.lastName;
    };
}
// adding new property to prototype
Employee.prototype.gender = null;

const darshini = new Employee("Darshini", "Jeyamurugan", "Content Creation", "Associate");
const maharajan = new Employee("Thengarai Maharajan", "Subbiah", "Computer Science", "Junior");
// adding new property to object
darshini.background = "Technology";
maharajan.background = "Engineering";
// modifying existing property
darshini.gender = "Female";
maharajan.gender = "Male";
console.log(darshini.fullName());
console.log(maharajan.fullName());
// adding method to object
darshini.changeName = function (name) {
    this.lastName = name;
}
// adding new method to the constructor
// Person.prototype.changeName = function (name) {
//     this.lastName = name;
// }
darshini.changeName('Thengarai Maharajan');
console.log(darshini);
console.log(darshini.fullName());