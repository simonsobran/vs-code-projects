var firstNum = +prompt("Введи первое число: ");
var secondNum = +prompt("Введи второе число: ");
var thirdNum = +prompt("Введи третье число: ");

if (firstNum === 0 || secondNum === 0 || thirdNum === 0) {
    document.write("Умножение на ноль - ноль!");
}

if (firstNum > 0) {
    firstNum = 1;
} else firstNum = -1;
if (secondNum > 0) {
    secondNum = 1;
} else secondNum = -1;
if (thirdNum > 0) {
    thirdNum = 1;
} else thirdNum = -1;

if ((firstNum + secondNum + thirdNum === 3) || (firstNum + secondNum + thirdNum === -1)) {
    document.write("Положительное число");
}
if ((firstNum + secondNum + thirdNum === 2) || (firstNum + secondNum + thirdNum === -3)) {
    document.write("Отрицательное число");
} 