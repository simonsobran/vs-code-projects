var temperature = +prompt("Сколько сегодня градусов?");
var scale = prompt("Какая это шкала?"); // F or C

function convertTemperatureToF(temperature) {
    return temperature / 5 * 9 + 32;
}
function convertTemperatureToC(temperature) {
    return (temperature - 32) / 9 * 5 ;
}

switch (scale) {
    case "F": 
        document.write(convertTemperatureToF(temperature));
        break;
    case "C":
        document.write(convertTemperatureToC(temperature));
        break;
    default:
        document.write("Что ты ввёл, бабайка?");
}