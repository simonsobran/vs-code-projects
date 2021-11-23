var questionCnt = 0;

// var questionnaire = {
//     questions: ["What's the use?","Who's performing 'la di-da-di-da'?", "What's the first 2021 Adele's single?"],
//     answers1: ["a. That's Mac Miller song", "b. That's Jay-Z", "c. That's Yeezy mah man!"],
//     answers2: ["a. Elvis Presley", "b. Slick Rick", "c. Led Zeppelin"],
//     answers3: ["a. Someone like you", "b. Do Ya like", "c. Hold On"],
//     rightAns: ["a", "b", "c"]
// }

var questionnaire = [ 
    questions = {
        question: ["What's the use?","Who's performing 'la di-da-di-da'?", "What's the first 2021 Adele's single?"],
        answers1: ["a. That's Mac Miller song", "b. That's Jay-Z", "c. That's Yeezy mah man!", "a. Elvis Presley", "b. Slick Rick", "c. Led Zeppelin", "a. Someone like you", "b. Do Ya like", "c. Hold On"],
        rightAns: ["a", "b", "c"]
    //    answers2: ["a. Elvis Presley", "b. Slick Rick", "c. Led Zeppelin"],
    //    answers3: ["a. Someone like you", "b. Do Ya like", "c. Hold On"]
    }
]

document.querySelector('#start').addEventListener('click', startGame);

function startGame() {
    // document.querySelector('#question-text').innerHTML = questionnaire[questions0.question[0]];
    document.querySelector('#question-text').innerHTML = questions.question[questionCnt];
    document.querySelector('#questions').innerHTML = questions.answers1[0 + questionCnt * 3] + '<br>' + questions.answers1[1+ questionCnt * 3] + '<br>' + questions.answers1[2+ questionCnt * 3] + '<br>';
    // document.querySelector('#result').innerHTML = checkAnswer(questionCnt);

    questionCnt = questionCnt + 1;
}

// function checkAnswer(questionNum) {
    
//     if () {

//     }
// }