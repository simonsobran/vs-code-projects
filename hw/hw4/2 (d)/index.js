var year = prompt("Введите год, чтобы определить его високосность.");

if (year % 4 !== 0) {
    alert ("Не високосный!");
} else if (year % 400 !== 0 && year % 100 === 0) {
    alert ("Не високосный!");
} else if (year % 100 !== 0 && year % 4 === 0) {
    alert ("Високосный!");
} else if (year % 400 === 0) {
    alert ("Високосный!");
}