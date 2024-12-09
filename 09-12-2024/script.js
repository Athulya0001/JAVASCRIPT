// new Promise((resolve,reject)=>{
//     let success = true;
//     if(success){
//         resolve("Success")
//     }else{
//         reject("Failed")
//     }
// }).then(result=>{
//     console.log(result)
// })

// function a(cb){
//     new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let success=true;
//             resolve(success)
//             cb();
//         },1000)
//     }).then(result=>{
//         console.log(result)
//     })
// }
// function b(cb){
//     new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let success=true;
//             if(success){
//                 resolve("Success")
//             }else{
//                 reject("Failed")
//             };
//             cb();
//         },1000)
//     }).then(result=>{
//         console.log(result)
//     })
// }
// function c(cb){
//     new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let success=true;
//             if(success){
//                 resolve("Success")
//             }else{
//                 reject("Failed")
//             };
//             cb();
//         },1000)
//     }).then(result=>{
//         console.log(result)
//     })
// }
// a(()=>{
//     b(()=>{
//         c(()=>{
//             console.log("end");
//         } )
//     })
// })

let x =5;
let y=3;
function a(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("start")
            resolve("success")
        },1000)
    })
}

function b(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("print 2nd func")
        },1000)
    })
}
a().then((result)=>{
    console.log(result);
    b();
})