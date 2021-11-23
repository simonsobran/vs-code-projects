var input = document.getElementById('input');
var prophecyText = document.getElementById('prophecyText');

function getProphecy() {
    console.log("This is the old text: " + prophecyText.innerText);
    switch(input.value.toLowerCase()) {
        case "butterfly" :
            prophecyText.innerText = input.value + " означает чувствуете себя молодым и бодрым человеком, готовым к всевозможным свершениям ";
            break;
        case "scull" :
            prophecyText.innerText = input.value + " знаменует поиски карт, волшебные фокусы, пророчество. наслаждайся";
            break;
        case "snail" :
            prophecyText.innerText = "И не только улитки-звезды на бегах. И не только звезды-улитки путеводные в пророческих экстазах. Будут и звезды такие. Улитки вутри";
            break;
        case "lightsaber" :
            prophecyText.innerText = "Кем угодно уничтожена сторона тёмная быть не может, Избранным только. Кто быть этим джедаем может? Не знаю я, но не родился ещё он или она";
            break;
        case "eye" :
            prophecyText.innerText = "Глаз Гора, который согласно мифам и легендам принадлежал богу с соколиной головой, является самым ярким эзотерическим знаком древней египетской культуры";
            break;
    }
}