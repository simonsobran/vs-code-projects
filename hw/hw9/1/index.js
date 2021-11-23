function factCompute() {
    var inputElement = document.getElementById("num");
    var result = 0;

    for (var i = 100; i >= 1; i--) {
        result = result + i;
    }
    document.getElementById('answer').innerText = result;
}