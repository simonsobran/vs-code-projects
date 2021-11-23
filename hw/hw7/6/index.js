var trafficColor = prompt("What's the color of traffic light? (Red or Yellow or Green)");
// trafficColor = trafficColor.toLowerCase();
// document.write(trafficColor);

switch (trafficColor.toLowerCase()) {
    case "red": 
        document.write("<p class ='red'>Stop it you!</p>");
        break;
    case "yellow":
        document.write("<p class ='yellow'>Hold on talmid</p>");
        break;
    case "green":
        document.write("<p class ='green'>Please, go</p>");
        break;
    default:
        document.write("Что ты ввёл, бабайка? Английским языком же написано!");
}

