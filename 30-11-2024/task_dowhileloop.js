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

var x =1;
do {
    if(x%2!==0){
        console.log(x)
    }
    x++
} while (x<=10);

console.log('3')

var i=10;
do {
    console.log(i)
    i--;
} while (i>=0);

console.log('4')

var fruit=['Apple', 'Banana', 'Cherry'];
var index = 0;

do {
    console.log(fruit[index]);
    index++;
} while (index<fruit.length);

console.log('5')

var i = 1;
var number=5;

do {
    console.log(i*number)
    i++;
} while (i<=10);
