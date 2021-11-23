 /*      3. Meal Order
          Пример на картинке order_food.PNG
          Создайте 3 поля, в кот. пользователь будет заполнять
          название блюда, общее количество заказанного и количество обедающих.
          Присоедините к каждому из полей Event Listener, кот. в момент
          изменения данных в одном из полей будет менять фразу 
          "You've ordered <сколько получается на одного> <название блюда>
          for each person".
          Создайте кнопку, при нажатии на которую будет появляться фраза:
          "Your order is on the way".
       
          CHALLENGE 1: Сделайте так, чтобы фраза "Your order is on the way"
          исчезала при любом изменении данных
       
          CHALLENGE 2: Используйте className и сделайте так, чтобы при любом
          изменении данных фон всех полей становился попеременно то желтым
          то сиреневым */
         
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

    /* TOGGLE the color classes */

    
    var foodTypeClasses = foodType.className.split(' ');
    var numOfPersClasses = numOfPers.className.split(' ');
    var numOfFoodClasses = numOfFood.className.split(' ');
    console.log(foodTypeClasses)
    console.log(numOfPersClasses)
    
    if (foodTypeClasses[foodTypeClasses.length-1] === 'violet') {
        foodTypeClasses[foodTypeClasses.length-1] = 'yellow'
        numOfPersClasses[numOfPersClasses.length-1] = 'yellow'
        numOfFoodClasses[numOfFoodClasses.length-1] = 'yellow'
    } else if (foodTypeClasses[foodTypeClasses.length-1] === 'yellow'){
        foodTypeClasses[foodTypeClasses.length-1] = 'violet'
        numOfPersClasses[numOfPersClasses.length-1] = 'violet'
        numOfFoodClasses[numOfFoodClasses.length-1] = 'violet'
    } else {
        foodTypeClasses.push('violet')
        numOfPersClasses.push('violet')
        numOfFoodClasses.push('violet')
    }
    
    foodType.className = foodTypeClasses.join(' ')
    numOfPers.className = numOfPersClasses.join(' ')
    numOfFood.className = numOfFoodClasses.join(' ')
}
            

                
        
        