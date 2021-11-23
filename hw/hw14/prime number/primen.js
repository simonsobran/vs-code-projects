var number = document.querySelector('#prime-input');
var output = document.querySelector('#output');

document.querySelector('#prime-submit').addEventListener('click', function (){
    if (number.value < 0 || number.value == null || number.value == "" || number.value == 0) {
        output.innerHTML = "Type a value more then 0!";
    } else {
        if(number.value == 1 || number.value == 2) {
            output.innerHTML = number.value + " is a prime number!";
            
        } else {
            for(var i = 2; i < number.value; i++) {
                if (Math.sqrt(number.value) % i === 0) {
                    return output.innerHTML = number.value + " is not a prime number!";
                    }
                }   
            output.innerHTML = number.value + " is a prime number!";
            number.value = "";
        }
    } 
});