function factCompute() {
    var maxNumElement = document.getElementById("max");
    var divNumElement = document.getElementById("div");
    var maxNum = Number(maxNumElement.value);
    var divNum = Number(divNumElement.value);

    //  for (var i = 12; i >= 0; i = i - 3) { заглушка
      
    //     for (maxNum; maxNum >= divNum; maxNum = maxNum - divNum) {
    //     if (maxNum % divNum == 0) console.log(maxNum);
    // }
    var string = "";
        for (var i = divNum; i <= maxNum; i++) {
        if (i % divNum == 0) {
            string = string + i + ', ';
        }
    }
    console.log(string);
}