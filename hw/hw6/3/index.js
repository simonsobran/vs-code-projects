var color = prompt("Введите цвет (зелёный, жёлтый или красный)");

switch (color) {
    case "зелёный" :
        document.write('<div class="green">Green</div>');
        break;
    case "жёлтый" :
        document.write('<div class="yellow">Yellow</div>');
        break;
    case "красный" :
        document.write('<div class="red">Red</div>');
        break;
}