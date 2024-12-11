let numbers=[2,4,5,12,3,8,11];
let result=numbers.reduce((accumulator,currentValue)=>{
    console.log("print")
    return accumulator>currentValue? accumulator:currentValue;
},0)
console.log(result)