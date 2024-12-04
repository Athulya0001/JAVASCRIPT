function printName(name,cb){
    greet();
    console.log("My name is " + name)
    

}
printName("Synnefo",greet);

function greet(){
    console.log("Good Morning!")
}