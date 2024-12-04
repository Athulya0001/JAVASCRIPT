// console.log("-----Closure-----")

// function a(){
//     var value = 100;

//     b();
//     function b(){
//         c();
//         function c(){
//             console.log(++value)
//         }
//     }
// }
// a();

let arr=[1,3,5,7,2,6,9,10,8,4]
let l = arr.length
console.log(arr)

function array(){
    console.log(Math.min(...arr),"Minimum value in the array")
    console.log(Math.max(...arr),"Maximum value in the array")
}
array(arr);
console.log("Print values in the array")
function arrayPrint(){
    for(let i=0;i<=l;i++){
        console.log(arr[i])
    }
}
arrayPrint(arr)