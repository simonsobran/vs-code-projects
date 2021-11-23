// var inputElement = document.getElementById("num");
// var spanHeads = document.getElementById("heads");
// var spanTails = document.getElementById("tails");


// function flipACoin() {
//     var num = parseInt(inputElement.value);
//     var countHeads = 0;
//     var countTails = 0;
//     var result = 0;
// if (num) {
//     for (var i = 1; i <= num; i++) {
//         result = Math.round(Math.random());
    
//         (result) ? countHeads++ : countTails++;
//     }
// } else {
//         countHeads = "*";
//         countTails = "*";
//     }
//     spanHeads.innerText = countHeads;
//     spanTails.innerText = countTails;
// }

var arr = [59,985,'ten'];
console.log(arr);

var cities = Array('Jerusalem', 'Rechovot', 'Tel-Aviv', 'Petach-Tikva', 'Haifa');
console.log('cities = ' + cities);

var new_arr = new Array (12);
console.log(new_arr, cities.length);

var str1 = 'refrigerator';
console.log(str1, str1.length);

cities[3] = 'Ayanot';
console.log(cities);
str1[3] = 'l';