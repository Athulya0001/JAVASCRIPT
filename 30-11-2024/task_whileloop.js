console.log("While Loop")

console.log(1)
var countDown = 10;

while(countDown>=0){
    console.log(countDown)
    countDown--;
}

console.log(2)
var i = prompt("Enter Even Number between 0 and 10");
var b = 0;
while(i<=20 && i>0){
    if(i=Number(b%2 == 0)){
        console.log(i)
    }
    b++
}

console.log(3)
var array = [1,2,3,4,5];

var l = array.length-1;

while(l>=0){
    console.log(array[l])
    l--;
}

console.log(4)
var x = 0;
var y =1;

while(y<=5){
    var pow = x*=y;
    console.log(pow)
    y++;
}

console.log(5)
x = 0;
y = 1;

while(y<=5){
    var sum = x += y;
    console.log(sum)
    y++;
}