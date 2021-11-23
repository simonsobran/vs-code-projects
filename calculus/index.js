var num1 = (prompt("Enter first number: "));
if (num1 === ""  || num1 == null) {
    num1 = Number(prompt("We need a number to do math. Enter first number again: "));
}
num1 = Number(num1);

var num2 = (prompt("Enter second number: "));
if (num2 === "" || num2 == null) {
    num2 = Number(prompt("We need a number to do math. Enter second number agaian: "));
}
num2 = Number(num2);    

var operation = prompt("Enter operation sign (*, +, -, /) ");

if (isNaN(num1)) {
    num1 = Number(prompt("Enter first number again: "));
}
if (isNaN(num2)) {
    num1 = Number(prompt("Enter second number again: "));
}

if (operation === '*') {
    alert(num1 * num2);
} else if (operation === '+') {
    alert(num1 + num2);
}  else if (operation === '-') {
    alert(num1 - num2);
}  else if (operation === '/') {
    alert(num1 / num2);
} else {
    alert("You've entered " + operation + " Operation should be one of ' *, +, -, /' ");
}