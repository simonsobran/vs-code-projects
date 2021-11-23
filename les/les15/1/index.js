var inp = document.querySelector('.input-num');
var out = document.querySelector('.output');

function validation(input) {
    var num = input.trim();
    //string.trim() removes whitespaces: space, tab, new line
    if (num.charAt(num.length-1) === '.') {
        return "It ends with a dot. It's strange"
    }
    if (Number(num) === 0 && num.length > 1) {
        return "If you want to enter 0 just do it"
    }
    if (input === 0 || input === null || input === "") {
        return "Type a number!";
    }
    num = Number(input);
    if (isNaN(num)) {
        return "Type a number!";
    }
    if (!Number.isInteger(num)) {
        return "Enter an integer, please!";
    }
    return "Is a number!"; 
}
function onInput() {
    var num = inp.value;
    out.innerText = validation(num);
}

inp.addEventListener('input', onInput);