var score = prompt("Введите оценку за экзамен, мистер преподаватель.");
var answer;

if (score >= 36 && score <= 45) {
    alert("Кто-то не очень хорошо соображает ...");
} else if (score >= 46 && score <= 55) {
    alert("Ешь витамины");
} else if (score >= 56 && score <= 65) {
    alert("ХА-ХА, послезавтра переэкзаменовка");
} else if (score >= 66 && score <= 75) {
    alert("Ну какая же ты посредственность!");
} else if (score >= 0 && score <= 16) {
    answer = prompt("а может ты заболел?");
}

if (answer === "нет") {
    alert("Дружок, надо подтянуть знания.");
} else if (answer === "да") {
    alert("Скорее хватай парацетамол.");
} else if (answer === "не знаю") {
    alert("Бегом, меряй температуру!");
}
