console.log("DoWhile Loops")

console.log('1')
var x =1;
do{
    if(x%2==0){
        console.log(x)
    }
    x++
}while(x<=10);


console.log('2')
var i = 10;

do{
    console.log(i)
}while(i<5);

console.log('3')

var x = 1;

do{
    if(x%2==0){
        console.log(x)
    }
}while(x<=10);

console.log('4')

do{
    if(x%2!==0){
        console.log(x)
    }
}while(x<=10);

console.log('5')

var array = [10,20,30,40,50,60,70,80,90,100];
var len = 0;
do{
    if(array[len]%2==0){
        console.log(array[len])
    }
    len++;
}while(len<=array.length);
