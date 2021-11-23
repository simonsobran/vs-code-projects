// var intNumber;
// var name;
// var place; 
// var proffesion;

var intNumber = prompt("Введите число");
var name  = prompt("Введите имя");
var place  = prompt("Введите место"); 
var proffesion = prompt("Введите профессию");

function prediction(intNumber, name, place, proffesion) {
    var answer = alert("Вы будете работать " + proffesion + " в " + place + ", поженитесь с " + name + " и у вас будет " + intNumber + " детей.");
    return answer;
}

// function getData(intNumber, name, place, proffesion) {
//     var intNumber = prompt("Введите число");
//     var name  = prompt("Введите имя");
//     var place  = prompt("Введите место"); 
//     var proffesion = prompt("Введите профессию");
//     return intNumber, name, place, proffesion;
// }
// var firstData = getData(intNumber, name, place, proffesion);

var firstPred = prediction(intNumber, name, place, proffesion);

var intNumber = prompt("Введите число");
var name  = prompt("Введите имя");
var place  = prompt("Введите место"); 
var proffesion = prompt("Введите профессию");

var firstPred = prediction(intNumber, name, place, proffesion);
