var score;
score = prompt("Enter Score");

// while (score > 100) {
//     alert("Invalid score. Please enter a score between 0 and 100.");
//     score = prompt("Enter score");
// }
if(score>100){
alert("Invalid score. Please enter a score between 0 and 100.")}
score = prompt("Enter score");

if (score <= 100) {
    if (score >=90 && score <= 100) {
        console.log("A Garde");
    }
    else if (score >= 80 && score < 90) {
        console.log("B Grade");
    } else if (score >= 70 && score < 80) {
        console.log("C Grade");
    } else if (score >= 60 && score < 70) {
        console.log("D Grade");
    } else if (score >= 40 && score < 60) {
        console.log("E Grade")
    }
    else if (score < 40) {
        console.log("Failed");
    }
}
switch (true) {
    case score > 90 && score <= 100:
        console.log("Excellent! Keep it up!")
        break;
    case score > 80 && score <= 90:
        console.log("Greate job! Aim for A next time!")
        break;
    case score > 70 && score <= 80:
        console.log("Goof effort! you can do even better!")
        break;
    case score > 60 && score <= 70:
        console.log("You passed, but there's room for improvement.")
        break;
    case score > 60 && score <= 70:
        console.log("Just passed! Focus more next time.")
        break;
    case score < 60:
        console.log("Failed. Don't give up, try harder next time!")
        break;

}