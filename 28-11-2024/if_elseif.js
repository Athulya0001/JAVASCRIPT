var score;
score = prompt("Enter Score");

if (score>100){
    alert("This is greater than 100, Give a value under 100");
}

score = prompt("Enter Score");

if (score<=100){
    if (score>90 && score<=100) {
        console.log("A Garde");
    }
    else if (score>80 && score<=90) {
        console.log("B Grade");
    } else if (score>70 && score<=80) {
        console.log("C Grade");
    } else if (score>60 && score<=70) {
        console.log("D Grade");
    } else if (score>50 && score<=60) {
        console.log("P Grade")
    }
    else if(score<50) {
        console.log("Failed");
    }
}
    
