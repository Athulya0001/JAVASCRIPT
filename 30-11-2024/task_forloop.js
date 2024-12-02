console.log("for Loop")

console.log("1")
var array = ['Apple', 'Orange', 'Grapes', 'Banana', 'Berry'];

for(i=0;i<=array.length;i++){
    console.log(array[i])
}

console.log("2")
var a = 1;

for (i=0;i<=5;i++){
    a = a + i;
    console.log(a*a)
}

console.log("3")
var x = 0;

for(i=1;i<=10;i++){
    var sum = x + i;
    
}
console.log(sum)

console.log("4")

for(a=1;a<=100;a++){
    if(a%10==0){
        console.log(a)
    }
}

console.log("5")

for(i=0;i<=5;i++){
    console.group(i*i*i)
}

