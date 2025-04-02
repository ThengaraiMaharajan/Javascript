// Function to compute the product of p1 and p2
function add(x, y) {
    return x * y;
}
const z = add(10,10);
console.log(z);
function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
}
let value = toCelsius(77);
console.log(value);
let text = "The temperature is " + toCelsius(77) + " Celsius";
console.log(text);