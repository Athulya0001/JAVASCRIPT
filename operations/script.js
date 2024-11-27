var a = prompt("enter number a")
console.log(a)
var b = prompt("enter number b")
console.log(b)
console.log(typeof a)
Number(a)
console.log(typeof Number(a))

console.log("ADDITION")

var sum = Number(a) + Number(b)
console.log(sum)

console.log("-------")
console.log("SUBTRACTION")

var sub = Number(a) - Number(b)
console.log(sub)

console.log("-------")
console.log("MULTIPLICATION")

var mul = Number(a) * Number(b)
console.log(mul)

console.log("-------")
console.log("DIVISION")

var div = Number(a) / Number(b)
console.log(div)

console.log("-------")
console.log("MODULUS")

var mod = Number(a) % Number(b)
console.log(mod)