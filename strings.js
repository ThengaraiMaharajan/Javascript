// strings 
let text = "John Doe";
let text1 = 'John Doe';
let text2 = `John Doe`;

let quotedText = "John 'Doe";
let quotedText1 = 'John" Doe';
let escapeText = "We are the so-called \"Vikings\" from the north.";
// console.log(escapeText);

// JavaScript Strings as Objects
// Normally, JavaScript strings are primitive values, created from literals:
let x = "John";
// But strings can also be defined as objects with the keyword new:
let y = new String("John");
// console.log(x);
// console.log(y);
// When using the == operator, x and y are equal:
// When using the === operator, x and y are not equal:
// Comparing two JavaScript objects always returns false.

// string methods

let text3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text3.length; // 26

// Extracting String Characters
// There are 4 methods
let text4 = "HELLO WORLD";
// 1) The at(position) Method
let char2 = text4.at(0); // H     // accepts negative index
// 2) The charAt(position) Method
let char = text4.charAt(0); // H  // doesnt accept negative index
// 3) The charCodeAt

// 4) Using property access [] like in arrays
let char3 = text4[  0] // H

// Extracting String Parts
let text5 = "Thengarai Maharajan Subbiah";
// There are 3 methods for extracting a part of a string:
// 1) slice(start, end)
let part = text5.slice(7, 13); // "ai Mah"
// if second param is omitted then the method will slice out rest of the s
// If a parameter is negative, the position is counted from the end of the string:
let part2 = text5.slice(-12, -6); // "ajan S"

// 2) substring(start, end)
// substring() is similar to slice().
// The difference is that start and end values less than 0 are treated as 0 in substring().
let part3 = text5.substring(7, 13); // "ai Mah"
// If you omit the second parameter, substring() will slice out the rest of the string.

// 3) substr(start, length)
// substr() is similar to slice().
// The difference is that the second parameter specifies the length of the extracted part.
let part4 = text5.substr(7, 2); // "ai"
// If you omit the second parameter, substr() will slice out the rest of the string.
let part5 = text5.substr(7); // "ai Maharajan Subbiah"
// uppercase lowercase
let part6 = text5.toUpperCase(); // THENGARAI MAHARAJAN SUBBIAH
let part7 = text5.toLowerCase(); // thengarai maharajan subbiah

let text7 = "Hello";
let text8 = "World";
let text9 = text7.concat(" ", text8, " ", "Feeling Good"); // Hello World Feeling Good
let text10 = "Hello" + " " + "World!"; // Hello World

// The trim() method removes whitespace from both sides of a string:
let text11 = "      Hello World!      ";
let text12 = text1.trim(); // "Hello World"

let text13 = "Hello world!";
let result = text13.repeat(2); // "Hello world!Hello world!"

let text14 = "Darshini Jeya Murugan";
// console.log(text14); // "Darshini Jeya Murugan"
let newText = text14.replace("Jeya Murugan", "Thengarai Maharajan");
// console.log(newText); // "Darshini Thengarai Maharajan"

let text15 = "I love cats. Cats are very easy to love. Cats are very popular."
text15 = text15.replaceAll("Cats","Dogs");
text15 = text15.replaceAll("cats","dogs");
// console.log(text15); // I love dogs. Dogs are very easy to love. Dogs are very popular.

// A string can be converted to an array with the split() method:
let text16 = "a,b,c,d,e,f";
const myArray = text16.split(",");  // [ 'a', 'b', 'c', 'd', 'e', 'f' ]

// string search method
// 1) indexOf()
// The indexOf() method returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found:
let text17 = "Please locate where 'locate' occurs!";
let index = text17.indexOf("locate"); // 7
// The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
let index1 = text17.lastIndexOf("locate"); // 21
// Both indexOf(), and lastIndexOf() return -1 if the text is not found:
// Both methods accept a second parameter as the starting position for the search:
let index2 = text17.indexOf("locate", 15); // 21

// 2) search
let index3 = text17.search("locate"); // 7
let index4 = text17.search(/locate/);

// 3) Match 
let text18 = "The rain in SPAIN stays mainly in the plain";
// If a regular expression does not include the g modifier (global search), match() will return only the first match in the string.
// console.log(text18.match("ain"));   // [ 'ain' ]
// console.log(text18.match(/ain/g));  // [ 'ain', 'ain', 'ain' ]
// console.log(text18.match(/ain/gi)); // [ 'ain', 'AIN', 'ain', 'ain' ]

//4) MatchAll
let text19 = "I love Cats. Cats are very easy to love. Cats are very popular."
const result1 = text19.matchAll("Cats");
// console.log(Array.from(result1)); // [ [ 'Cats' ], [ 'Cats' ], [ 'Cats' ] ]

// 5) includes()
let text20 = "Hello world, welcome to the universe.";
// console.log(text20.includes("world")); // true;
// Check if a string includes "world". Start at position 12:
// console.log(text.includes("world", 12)); // false;

// 6) startsWith()
// The startsWith() method returns true if a string begins with a specified value.
let text21 = "Hello world, welcome to the universe.";
// console.log(text21.startsWith("Hello")); // true
// A start position for the search can be specified:
// console.log(text21.startsWith("world", 6)); // true

// 7) endsWith()
// The endsWith() method returns true if a string ends with a specified value.
// console.log(text21.endsWith("universe.")); // true
// console.log(text21.endsWith("universe")); // false

// template strings
let text22 = `Hello World!`;
// quotations can be mentioned inside
let text23 = `He's often called "Johnny"`;
// variables inside quotations
let firstName1 = "John";
let lastName1 = "Doe";
let text24 = `Welcome ${firstName1}, ${lastName1}!`;
// console.log(text24);

// Template Strings allow expressions in strings:
let price = 10;
let VAT = 0.25;
let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
// console.log(total);
