var guessButton = document.querySelector("#guess-button");
var guessInput = document.querySelector("#quess-word");
var responseButton = document.querySelector("#response-button");
var responseInput = document.querySelector("#response-word");

var guessWord;
var responseWord;

var counter = 10;
var gameOn = false;

guessButton.addEventListener('click', function(){
    guessWord = document.querySelector("#quess-word").value;
    splittedWord = guessWord.split('');
    gameOn = true;
    console.log(guessWord);
    console.log(splittedWord);
    guessInput.value = '';
    guessButton.disabled = true;
    document.querySelector('#counter').innerHTML = counter + " tries left";
    //дописать вывод слова с чёрточками
});

responseButton.addEventListener('click', function() { 
    //если целое слово - одна функция. если одна буква - другая 
    wordGuess();
    
});

function wordGuess() {
    responseWord = document.querySelector("#response-word").value;
    if (responseWord === guessWord) {
        console.log('win!');
    } else console.log('loss!');
    responseInput.value = '';
}
// function charGuess() {

// }



/*
var str1 = 'Toda Raba'
var arr1 = str1.split('');

console.log(str1);
console.log(arr1);
*/