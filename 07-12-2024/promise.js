console.log("promise")


 const mypro= new Promise((resolve,reject)=>{
    let success=false;
    if(success){
       resolve("promise success")
        
    }
    else{
        reject("promise reject")
    }
})
// console.log(mypro)

mypro.then((result=>{
    console.log(result)
}));
// .catch((err)=>{console.log(err))