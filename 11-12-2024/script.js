let array = [5,10,15,20,25];
// let num = array.filter((value, index)=> value%5==0)
// num.forEach(value=>console.log(value))
// array.forEach((value,index)=>{
//     if(value%3==0){
//         console.log(value)
//     }
// }) 


// map() method

// let result = array.map((value)=>{
//     return value*2
// })
// console.log(result)
// console.log(array)

// filter() method

// let value = array.filter((value,index)=>{
//     return value%5!=0
// })
// console.log(value)

// reduce() method-used for operations like addition

let sum = array.reduce((accumulator, currentValue)=>{
    console.log("print")
    return accumulator+currentValue},array[2])
console.log(sum)