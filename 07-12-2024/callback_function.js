function ab(c){
    console.log("heading one")
    cd();
   
}ab(cd);
function cd(){
    console.log("heading two");
}


console.log("callback hell")

function a(cb){

    setTimeout(()=>{
        console.log("first");
        cb()},1000);
}
   function b(cb){
    setTimeout(()=>{
        console.log("second");
        cb()},1000);
    }
   function c(cb){
    setTimeout(()=>{
        console.log("third");
        cb()},1000);
   }


a(()=>{
    b(()=>{
        c(()=>{
            console.log("end");
        } )
    })
})