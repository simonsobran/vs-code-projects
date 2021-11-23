var modal = confirm("Do you want it to stop?");
/*
switch (modal) {
    case true:
        document.write("Thanks. There will be no more modals");
        break;
    case false:
    alert("You asked for it");
}
*/

if (modal) {
    document.write("Thanks. There will be no more modals");
} else alert("You asked for it");
