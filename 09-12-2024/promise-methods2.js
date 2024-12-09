console.log("Promise.allSettled() method")
let promiseall_1 = new Promise((resolve,reject)=>{
    resolve(1);
})
let promiseall_2 = new Promise((resolve,reject)=>{
    reject("Error");
})
Promise.allSettled([promiseall_1, promiseall_2]).then(result=>{
    console.log(result)
})

console.log("---------")
console.log("Promise.race() method")
let promiserace_1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("success 1")
    },2000)
})
let promiserace_2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("success 2")
    },1000)
})
let promiserace_3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("success 3")
    },1500)
})
Promise.race([promiserace_1,promiserace_2,promiserace_3]).then(value=>{
    console.log(value)
})
console.log("---------")