// var a=10;
// console.log(this.a)

// function xyz(){
//     console.log(this)
// }
// xyz();
// var xy = ()=>{
//     console.log(this)
// }
// xy();

// let phone = {
//     brand :"samsung",
//     storage : 256,
//     print: function abc(){
//         console.log(this.brand)
//     }
// }
// phone.print();

// console.log("-----CLOSURE-----")


// function a(){
//     let count = 0;
//     b();
//     function b(){
//         c()
//         function c(){
//             console.log(count)
//         }
//     }
// }
// a();

// console.log("----RECURSIVE FUNCTION----")

// function xyz(num){
//     if(num===0){
//         return;
//     }

//     console.log(num)
//     xyz(num-1);
// }
// xyz(5);

console.log("Print Factorial")


function factorial(num){

    if(num===0){
        return 1;
    }

    return num*factorial(num-1)
}
console.log(factorial(6));