let promise1= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("success")
    },1000)
})
let promise2= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("success2")
    },3000)
})
let promise3= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("success3")
    },2000)
})
Promise.any([promise1,promise2,promise3]).then((value)=>{
    console.log(value)
})