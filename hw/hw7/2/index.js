var month = prompt("Enter a month...");
var year = +prompt("Enter a year...");

switch (month) {
    case 'dec' :
    case "jan" :
    case "mar" :
    case "may" :
    case "jul" :
    case "aug" :
    case "oct" :
        alert("31 days in " + month + " month");
        break;
    case "apr" :
    case "jun" :
    case "sep" :
    case "nov" :
        alert("30 days in " + month + " month");
        break;
    case "feb" :
        if (year % 4 === 0) {
            alert("29 days in " + month + " month");
        } else 
            alert("29 days in " + month + " month");
        break;
    default :
        alert("There is no such month as " + month);
}