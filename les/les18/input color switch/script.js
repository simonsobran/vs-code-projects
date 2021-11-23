var mealType = document.querySelector('#mealOutput');
var numOfFood = document.querySelector('#howMany');
var foodType = document.querySelector('#food');
var changeColor = document.querySelector('.color')
          
          
var personAmount = document.querySelector('#persNumOutput');
var numOfPers = document.querySelector('#pers');

var button = document.querySelector("#btn");
var btnResult = document.querySelector("#orderedWay")
          
foodType.addEventListener('keyup',onInputChange);
numOfPers.addEventListener ('keyup',onInputChange);
numOfFood.addEventListener ('keyup',onInputChange);

button.addEventListener('click', function () {
    btnResult.innerHTML = 'Your order is on the way';
})

function onInputChange (){
    btnResult.innerHTML = ""

    var foodValue = foodType.value;

    if (!foodValue)
        mealType.innerHTML = 'MEAL';
    else mealType.innerHTML = foodValue;

    var personsValue = +numOfPers.value;
    var numOfFoodValue = +numOfFood.value;

    if (!personsValue || personsValue === NaN || !numOfFoodValue || numOfFoodValue ===NaN) 
        personAmount.innerHTML = 'NUMBER'
    else
        personAmount.innerHTML = Math.round((numOfFoodValue / personsValue)*10)/10;


    if (foodType.classList.contains('violet')) {
        foodType.classList.replace('violet', 'yellow')
    }

    // foodType.classList.add('yellow');
    // foodType.classList.remove('shadow');
    // foodType.classList.toggle('shadow'); // добавляет класс если его нет / убирает класс если есть 
    // console.log(foodType.className);
    // console.log(numOfPers.className);

    /* TOGGLE the color classes */

    
    // var foodTypeClasses = foodType.className.split(' ');
    // var numOfPersClasses = numOfPers.className.split(' ');
    // var numOfFoodClasses = numOfFood.className.split(' ');
    // console.log(foodTypeClasses)
    // console.log(numOfPersClasses)
    
    // if (foodTypeClasses[foodTypeClasses.length-1] === 'violet') {
    //     foodTypeClasses[foodTypeClasses.length-1] = 'yellow'
    //     numOfPersClasses[numOfPersClasses.length-1] = 'yellow'
    //     numOfFoodClasses[numOfFoodClasses.length-1] = 'yellow'
    // } else if (foodTypeClasses[foodTypeClasses.length-1] === 'yellow'){
    //     foodTypeClasses[foodTypeClasses.length-1] = 'violet'
    //     numOfPersClasses[numOfPersClasses.length-1] = 'violet'
    //     numOfFoodClasses[numOfFoodClasses.length-1] = 'violet'
    // } else {
    //     foodTypeClasses.push('violet')
    //     numOfPersClasses.push('violet')
    //     numOfFoodClasses.push('violet')
    // }
    
    // foodType.className = foodTypeClasses.join(' ')
    // numOfPers.className = numOfPersClasses.join(' ')
    // numOfFood.className = numOfFoodClasses.join(' ')
}