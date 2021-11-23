var humanName = "Simon The Human";
var humanBirthYear = 1996;
var currentYear = 2021;
var humanCurrentAge = currentYear - humanBirthYear;

if (humanCurrentAge % 10 === 0) {
    console.log("Йоси, поздравляю с 40-летним юбилеем!")
} else {
    console.log("Йоси, поздравляю, тебе "+ humanCurrentAge + " " + "лет!");
} if (humanCurrentAge >= 60) {
    console.log("Оооо, да ты аксакал!");   
}

// конец задания a). начало задания б)

var firstNum = 9;
var secondNum = 5;
var thirdNum = 14;

var PairWinner = 0;
var greatest = 0;

if (firstNum >= secondNum) {
    firstPairWinner = firstNum
} else {
    firstPairWinner = secondNum
}
if (firstPairWinner >= thirdNum) {
    greatest = firstPairWinner
} else {
    greatest = thirdNum
}

console.log(greatest);