console.log("for Loop")

console.log("1")
var array = ['Apple', 'Orange', 'Grapes', 'Banana', 'Berry'];

for(i=0;i<=array.length;i++){
    console.log(array[i])
}

console.log("2")
var a = 1;
var b = a * a;

for (i=0;i<=5;i++){
    var c = a += i;
    console.log(b)
}

console.log("3")
var x = 0;

for(i=1;i<=10;i++){
    var sum = x += i;
    console.log(sum)
}

console.log("4")
var p = a % 10;
for(a=0;a<=100;a++){
    if(p==0){
        console.log(a)
    }
}

console.log("5")

for(i=0;i>0;i++){
    if(i=i*i,i<=100){
        console.log(i)
    }
}

