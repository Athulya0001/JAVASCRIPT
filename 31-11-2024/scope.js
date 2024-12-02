var a = 100;

function func(){
    a = 1000;
    console.log(a, "Inside the function")
}

console.log(a,"outside the function")
func();
console.log(a,"outside the function after calling")