var randomTxtDiv = document.querySelector('div.random-txt'); //пишем селектор как в css
var sequentialTxtDiv = document.querySelector('div.sequential-txt');
var arrayOfPhrases = ["You do you!", "Go get them, tiger!", "You go, girl!", "Play nice!", "Hello, what's new?"];
var cnt = 0;
function randIdx() {
    return Math.floor(Math.random() * arrayOfPhrases.length);
}

randomTxtDiv.addEventListener('mouseover', function() {
    randomTxtDiv.innerHTML = '<h3>'+arrayOfPhrases[randIdx()]+'</h3>';
    cnt++;
    console.log(cnt);
});

randomTxtDiv.addEventListener('mouseout', function() {
    randomTxtDiv.innerHTML = '<h3>Mouse</h3>';
});