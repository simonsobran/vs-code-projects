var num = document.getElementById('num');
var place = document.getElementById('place');
var name = document.getElementById('fname');
var occupation = document.getElementById('occupation');

var answer = document.getElementById('answer');

function prediction() {
    if (!num.value || !place.value || !fname.value || !occupation.value) {
        var txt = "Смотрю в хрустальный шааааааар ...";
    } else {
        txt = 'Вы будете работать ' + occupation.value + 'в ' + place.value + ' поженитесь с ' + fname.value + 'и у вас будет ' + num.value + 'детей ';
    }
    answer.innerText = txt;
}

// function prediction() {
//     // if (!num.value || !place.value || !fname.value || !occupation.value) {
//     num.innerText = "?"; 
//     txt = 'Вы будете работать ' + occupation.value + 'в ' + place.value + ' поженитесь с ' + fname.value + 'и у вас будет ' + num.value + ' детей ';
//     answer.innerText = txt;
// }
// спросить у Натали как сделать ?? при отсутствии значений