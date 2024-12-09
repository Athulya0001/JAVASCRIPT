console.log("Promise.all() method")
let promiseall_1= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("success")
    },1000)
})
let promiseall_2= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("success2")
    },3000)
})
Promise.all([promiseall_1,promiseall_2]).then((value)=>{
    console.log(value)
})

console.log("---------")
console.log("Promise.any() method")
let promiseany_1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Success 1")
    },2500)
})
let promiseany_2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("Success 2")
    },2000)
})
let promiseany_3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Success 2")
    },1000)
})
Promise.any([promiseany_1,promiseany_2,promiseany_3]).then((result)=>{
    console.log(value)
})
console.log("---------")