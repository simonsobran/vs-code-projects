ц// document.write("<h2> I'm JS written object</h2>");

/* 4 спортсмена рисуют. Яэль Арад и Арик Зээви 
   рисуют самолеты. Шахар Пээр и Галь Фридман
   рисуют танки.
   Яэль и Шахар рисуют красным.
   Арик и Галь рисуют синим.
   Спортсмен подходит к компьютеру и говорит:
   "Меня зовут ..." Компьютер должен ответить,
   что и какого цвета спортсмен рисует.*/
var sportsmanName = prompt("Na na na, what's ur name? ");
var picture;
var pictureColor;

switch(sportsmanName) {
    case "Яэль": 
        picture = "Самолёт";
        pictureColor = " красный";
        break;
    case "Арик": 
        picture = "Самолёт";
        pictureColor = " синий";
        break;
    case "Яэль": 
        picture = "Танк";
        pictureColor = " красный";
        break;
    case "Яэль": 
        picture = "Танк";
        pictureColor = " синий";
        break;
    default:
        picture = "НЛО";
        pictureColor = " безцветное";
}
document.write(picture + ' ' + pictureColor);

/*
if (sportsmanName == "Яэль" || sportsmanName == "Арик") {
    picture = "Самолёт";
} else if (sportsmanName == "Шахар" || sportsmanName == "Галь") {
    picture = "Танк";
} else picture = "НЛО";
if (sportsmanName == "Яэль" || sportsmanName == "Шахар") {
    pictureColor = " красный";
} else if (sportsmanName == "Арик" || sportsmanName == "Галь") {
    pictureColor = " синий";
} else pictureColor = "бесцветное";
document.write(picture + ' ' + pictureColor);
*/