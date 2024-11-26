// convert string to a number
console.log("convert string to a number ;")
var a = "1234"
console.log(Number(a))
console.log(typeof a)

console.log("---------")
// Check if a number is integer
console.log("Check if a number is integer ;")
console.log(Number.isInteger(a))

console.log("---------")
// Find the maximum and minimum values
console.log("Find the maximum and minimum values :")
var array = [1, 3, 0, 9, 7];
var min = Math.min(...array);
var max = Math.max(...array);
console.log("Minimum value of array is :")
console.log(min)
console.log("Maximum value of array is :")
console.log(max)

console.log("---------")
// Round a number
console.log("Round a Number ;")
var b = 3.216;
var c = 3.786;
console.log(b.toFixed(0))
console.log(c.toFixed(0))

console.log("---------")
// Find the Absolute Value
console.log("Find the Absolute Value ;")
var x = Math.abs(2.35);
console.log(x)
var y = Math.abs(-2.35);
console.log(y)
var z = Math.abs(3-7);
console.log(z)

console.log("----------")
// Generate a Random Number
console.log("Generate a Random Number ;")
var rand = Math.random()
console.log(rand)

console.log("----------")
// Find the Power of a Number
console.log("Find the Power of a Number ;")
var power = Math.pow(2, 4);
console.log(power)

console.log("----------")
// Convert Number to String
console.log("Convert Number to String ;")
var num1 = 12;
var num2 = 50;
var strg = num1.toString() + num2.toString()
console.log(strg)
console.log(typeof strg)

console.log("----------")
// Number Precision
console.log("Number Precision ;")
var num = 3.1433;
console.log(num.toPrecision())
console.log(num.toPrecision(2))

console.log("----------")
// Check if a Number is NaN (Not a Number)
console.log("Check if a Number is NaN ;")
var n1 = 2;
console.log(n1)
var n2 = -3;
console.log(n2)
var n3 = 2 / 0;
console.log(n3)
var n4 = 'Hello World!'
console.log(n4)

console.log("----------")