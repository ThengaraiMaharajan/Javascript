// numbers
let x = 3.14;    // A number with decimals
let y = 3;       // A number without decimals

let x1 = 123e5;    // 12300000
let y1 = 123e-5;   // 0.00123

// JavaScript Numbers are Always 64-bit Floating Point

// Integers (numbers without a period or exponent notation) are accurate up to 15 digits.
//This format stores numbers in 64 bits, where the number (the fraction) is stored in bits 0 to 51, the exponent in bits 52 to 62, and the sign in bit 63:
// Integers (numbers without a period or exponent notation) are accurate up to 15 digits.
let x2 = 999999999999999;   // x will be 999999999999999
// The maximum number of decimals is 17.
let y2 = 9999999999999999;  // y will be 10000000000000000

// NaN - Not a number
let x3 = 100;
// console.log(isNaN(x3)); // false
// NaN is a number: typeof NaN returns number:

let x4 =  2 / 0; // Infinity
let y4 = -2 / 0; // -Infinity
// Infinity is a number: typeof Infinity returns number.

// BigInt
// JavaScript integers are only accurate up to 15 digits

// JavaScript can only safely represent integers: Up to 9007199254740991 +((2**53)-1) and Down to -9007199254740991 -((2**53)-1).
// Integer values outside this range lose precision.

// How to Create a BigInt
// To create a BigInt, append n to the end of an integer or call BigInt():
let x5 = 1234567890123456789012345n;
let y5 = BigInt(1234567890123456789012345);
// The JavaScript typeof a BigInt is "bigint"
// Operators that can be used on a JavaScript Number can also be used on a BigInt.
// A BigInt can not have decimals.


// Number Methods
let x6 = 123;
// console.log(x6.toString()); // "123"

let x7 = 9.656;
// console.log(x7.toExponential(2));   // "9.66e+0"
// console.log(x7.toExponential(4));   // "9.6560e+0"
// console.log(x7.toExponential(6));   // "9.656000e+0"

let x8 = 9.656;
// console.log(x8.toFixed(0)); // 10
// console.log(x8.toFixed(2)); // 9.66
// console.log(x8.toFixed(4)); // 9.6560
// console.log(x8.toFixed(6)); // 9.656000

// Converting Variables to Numbers
// The Number() method can be used to convert JavaScript variables to numbers:
// console.log(Number(true)); // 1
// console.log(Number(false)); // 0
// console.log(Number("10")); // 10
// console.log(Number("  10"));  // 10
// console.log(Number("10  ")); // 10
// console.log(Number(" 10  ")); // 10
// console.log(Number("10.33")); // 10.33
// console.log(Number("10,33")); // NaN (Not a Number)
// console.log(Number("10 33")); // NaN (Not a Number)
// console.log(Number("John")); // NaN (Not a Number)

// Number() can also convert a date to a number.
// The Date() method returns the number of milliseconds since 1.1.1970.
let x10 = new Date();
// console.log(Number(x)); // 1743691359935

// parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:
// console.log(parseInt("-10")); // -10
// console.log(parseInt("-10.33")); //  -10
// console.log(parseInt("10")); //  10
// console.log(parseInt("10.33")); //  10
// console.log(parseInt("10 20 30")); //  10
// console.log(parseInt("10 years")); //  10
// console.log(parseInt("years 10")); //NaN (Not a Number)

// console.log(parseFloat("10"));// 10
// console.log(parseFloat("10.33")); // 10.33
// console.log(parseFloat("10 20 30"));  // 10
// console.log(parseFloat("10 years"));  // 10
// console.log(parseFloat("years 10"));  // NaN (Not a Number)

// console.log(Number.isInteger(10)); // true
// console.log(Number.isInteger(10.5)); // false

// console.log(Number.isSafeInteger(10)); // true
// console.log(Number.isSafeInteger(12345678901234567890)); // false

// Safe integers are all integers from -(253 - 1) to +(253 - 1).
// This is safe: 9007199254740991. This is not safe: 9007199254740992.