console.log("ANONYMOUS FUNCTION")
var y = function(){
    var a = 'This is an Anonymous Function';
    console.log(a)
};
y();

console.log('----------')

console.log("ARROW FUNCTION")
var x = () => {
    return "This is an Arrow Function"
};
console.log(x());

console.log('----------')

console.log("IMMEDIATELY INVOKED FUNCTION")
var result = function() {
    var b = "These functions are executed immediately after they are defined";
    console.log(b)
};
result();