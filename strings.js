// strings 
let text = "John Doe";
let text1 = 'John Doe';
let text2 = `John Doe`;

let quotedText = "John 'Doe";
let quotedText1 = 'John" Doe';
let escapeText = "We are the so-called \"Vikings\" from the north.";
console.log(escapeText)

// JavaScript Strings as Objects
// Normally, JavaScript strings are primitive values, created from literals:
let x = "John";
// But strings can also be defined as objects with the keyword new:
let y = new String("John");
console.log(x);
console.log(y);
// When using the == operator, x and y are equal:
// When using the === operator, x and y are not equal:
// Comparing two JavaScript objects always returns false.

// string methods

let text3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text3.length; // 26

// Extracting String Characters
// There are 4 methods
// 1) The at(position) Method
let text4 = "HELLO WORLD";
let char = text.charAt(0);
console.log(char)