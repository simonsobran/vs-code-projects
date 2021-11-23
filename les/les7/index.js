/*
var areYouSure = confirm("Confirm $$ question");

if (areYouSure) {
    alert('Deleting ...');
} else {
    alert("It's a miracle!");
}

if (confirm("what's up?")) {
    alert("yes");    
} else alert("no");


var month = prompt("Enter a month...");

switch (month) {
    case "dec", "jan", "feb" :
        alert("its winter");
        break;
    case "mar", "apr", "may" :
        alert("its spring");
        break;
    case "june", "jule", "aug" :
        alert("SUMMER");
        break;
    case "sep", "oct", "nov" :
        alert("it's your autumn time");
        break;
    default :
        alert("There is no such month " + month);
}

var grade = +prompt("doing good? what's ur score bruh");
switch (true) {
    case grade > 90:
        alert("A")
        break;
    case grade > 80:
        alert("B")
        break;
    case grade > 70:
        alert("C")
        break;
    case grade > 60:
        alert("D")
        break;
    case grade > 50:
        alert("E")
        break;
    default :
        alert("F")
        break;
}

var num = +prompt("Введите число ...");
var result = 1;

switch(num) {
    case 5:
        result = result * 5;
    case 4:
        result = result * 4;
    case 3:
        result = result * 3;
    case 2:
        result = result * 2;
    case 1:
        result = result * 1;
        break;
    default:
        result = "The numbers should be in the interval from 1 to 5";
}


var answer = prompt('do you have a clean t-shirt?');

var action = (answer === "y") ? action = "Wear it" : action = "Go do laundry";

alert(action);


var answer = prompt("What's your answer?");
var str = (answer !== "y" && answer !== "n") ? 'invalid answer' : ((answer === "y") ? "Wear it" : "Go do laundry");

alert(str);
*/

var score1 = prompt("Введите счёт:");
var score2 = prompt("Введите счёт:");
var score3 = prompt("Введите счёт:");
var whosTeam = 'Max';

function threeNumAverage(num1, num2, num3, teamname) {
    var avg = ((num1 + num2 + num3) / 3);
    alert(teamname + "'s team got in average" + avg + " points");
    return avg;
}

if (score1 === '' || score1 ===null) {
    score1 = prompt('This value should not be empty. Enter 1st score:');
}

maxTeamAvg = threeNumAverage(score1 + score2 + score3);