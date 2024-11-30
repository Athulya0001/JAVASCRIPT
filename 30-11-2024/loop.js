console.log("For loop")
var array=100;
console.log(array, "array")

for(i=1;i<=100;i++){
    console.log(i)
}

console.log("while loop")

var a= 5;
while(a<100){
    console.log(a);

    a += 95
}

console.log("dowhile loop")

var a=5;
do{
    console.log(a);
}while(a>100)


var array = [1,2,3,4,5];
console.log(array)
console.log(array.length)

for(i=0;i<=array.length;i++){
    // console.log(array[0])
    // console.log(array[i])
     
    if (i==3){
        continue;
    }
    else{
        console.log(array[i])
    }
}

var arr= [1,2,3,4,5,6,7,8,9,10];
console.log(arr)
// arr.shift()
// console.log(arr, "Shift, remove first element")
// arr.unshift(3,4)
// console.log(arr,"Unshift, add elements to the start")
// console.log(arr.slice(4,8), "Slice")
// console.log(arr.splice(2,5), "Splice")
// console.log(arr,"after splice")
// console.log(arr,"after slice")
 

// var afterSplice = arr.splice(2,4);
// console.log(afterSplice)
var afterSlice = arr.slice(2,4);
console.log(afterSlice)
