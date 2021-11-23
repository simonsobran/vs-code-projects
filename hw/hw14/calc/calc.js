var firstNum = document.querySelector('#firstNum');
var secondNum = document.querySelector('#secondNum');
var operator = document.querySelector('#operator');
var calculate = document.querySelector('#calculate');
var result;
var showResult = document.querySelector('#result');
// var cnt = 0; //для дебагга

firstNum.addEventListener("input", function() {
    firstNum = Number(document.querySelector('#firstNum').value); 
    console.log(firstNum)});
    
secondNum.addEventListener("input", function() {
    secondNum = Number(document.querySelector('#secondNum').value); 
    console.log(secondNum)});

operator.addEventListener("input", function() {
    operator = document.querySelector('#operator').value; 
    console.log(operator)});

calculate.addEventListener("click", function() {
    switch(operator) {
        case '+':
            // cnt++;
            // console.log(cnt);
            result = addition(firstNum, secondNum);
            // console.log(result);
            showResult.innerHTML = result;
            return result;
        break;
        case '-':
            result = extraction(firstNum, secondNum);
            showResult.innerHTML = result;
        return result;
        break;
        case '*':
            result = multiply(firstNum, secondNum);
            showResult.innerHTML = result;
            return result;
        break;
        case '/':
            result = division(firstNum, secondNum);
            showResult.innerHTML = result;
            return result;
        break;
        case '^':
            result = exponentiation(firstNum, secondNum);
            showResult.innerHTML = result;
            return result;
        break;
        default: showResult.innerHTML = 'Type numbers and operator to get result';
    }
}
);

function addition(num1, num2) {
    return num1 + num2;
}
function extraction(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function division(num1, num2) {
    return num1 / num2;
}
function exponentiation(num1, num2) {
    return num1 ** num2;
}
