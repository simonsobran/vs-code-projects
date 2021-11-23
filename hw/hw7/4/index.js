var circleLenght;
var circleArea;

var radius = +prompt("Введите длинну окружности ");

function getCircleLenght(radius) {
    return 2 * Math.PI * radius;
}

var circleLenght = getCircleLenght(radius);
document.write(circleLenght);

function getCircleArea(radius) {
    return Math.PI * radius * radius;
}

var circleArea = getCircleArea(radius);
document.write(circleArea);

