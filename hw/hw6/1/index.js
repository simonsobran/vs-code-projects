var firstNum = +prompt("Введи первое число: ");
var secondNum = +prompt("Введи второе число: ");
var thirdNum = +prompt("Введи третье число: ");
//сделал сортировку от большего к меньшему, извините
if (firstNum >= secondNum && firstNum >= thirdNum) {
    if (secondNum >= thirdNum) {
        alert(firstNum + ", " + secondNum + ", " + thirdNum);
    } else {
        alert(firstNum + ", " + thirdNum + ", " + secondNum);
    }
}

if (secondNum >= firstNum && secondNum >= thirdNum) {
    if (firstNum >= thirdNum) {
        alert(secondNum + ", " + firstNum + ", " + thirdNum);
    } else {
        alert(secondNum + ", " + thirdNum + ", " + firstNum);
    }
}

if (thirdNum >= firstNum && thirdNum >= secondNum) {
    if (secondNum >= firstNum) {
        alert(thirdNum + ", " + secondNum + ", " + firstNum);
    } else {
        alert(thirdNum + ", " + firstNum + ", " + secondNum);
    }
}