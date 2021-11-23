var homework = prompt("Хотите посмотреть домашку, מורה?")
    if (homework == "да") {
        alert("Тов!");
    } else alert("Тоже тов!");


var canSwim = prompt("Умеешь плавать?")
    if (canSwim == "нет") {
        alert("Тов. Приходи на занятие!");
    }

var score = prompt("Какая у тебя оценка? (A, B, C, D, F)");
    if (score === "F") {
        alert("Very плохо!");
    } else if (score === "A") {
        alert("Очень good!");
    } else {
        alert("Посредственные оценочки, иди учись");
    }

var currentYear = +prompt("Какой сейчас год?");
var weddingYear = +prompt("В каком году была свадьба?");
var diff = currentYear - weddingYear;
    if (diff % 5 == 0) {
        alert("С вас ресторан!"); 
    } else {
        alert("С днём свадьбы!");
    }

var humanOneDay = +prompt("Введите День рождения человека Один");
var humanOneMonth = +prompt("Введите Месяц рождения человека Один");
var humanOneYear = +prompt("Введите Год рождения человека Один");

var humanTwoDay = +prompt("Введите День рождения человека Два");
var humanTwoMonth = +prompt("Введите Месяц рождения человека Два");
var humanTwoYear = +prompt("Введите Год рождения человека Два");

alert("Happy Birthday!");
if (humanOneDay == humanTwoDay && humanOneMonth == humanTwoMonth && humanOneYear == humanTwoYear) {
    alert("You was born at the same day exactly!");
} else if (humanOneDay == humanTwoDay && humanOneMonth == humanTwoMonth) {
    alert("You've got the same birthday!");
}

var one = +prompt("Введите число Один");
var two = +prompt("Введите число Два");
var three = +prompt("Введите число Три");
var four = +prompt("Введите число Четыре");

if (one > two && one > three && one > four) {
    alert("Самое большое число " + one);
} else if (two > one && two > three && two > four) {
    alert("Самое большое число " + two);
} else if (three > one && three > two && three > four) {
    alert("Самое большое число " + three);
} else if (four > one && four > two && four > three) {
    alert("Самое большое число " + four);
} else alert ("Вы играете не по правилам!");
