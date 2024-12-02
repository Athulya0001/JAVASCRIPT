console.log("Square star pattern")

for(i=1;i<=5;i++){
    console.log('* * * * *')
}

console.log("Triangle")

let str = '';
for(let i=1;i<=5;i++){
    for(let j=1;j<=5-i;j++){
        str+='*'
    }
}