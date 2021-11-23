function factCompute() {
    var inputElement = document.getElementById("num");
    var num = parseFloat(inputElement.value);
    var result;
    inputElement.value = num;

    if (num < 0) result = "";
    else if (num === 0) 
        result = 1;
    else
    result = num;
    for (var i = num-1; i >= 1; i--) {
        result = result * i;
    }

    document.getElementById('answer').innerText = result;
}
// function factCompute() {
//     var inputElement = document.getElementById("num");
//     var num = parseFloat(inputElement.value);
//     var result = 1;

//     for (var i = 1; i <= num; i++) {
//         result = result * i;
//     }

//     document.getElementById('answer').innerText = result;
// }