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

    
    // foodType.classList.add('yellow')
    // foodType.classList.remove('shadow')
    //console.log(foodType.classList.contains('inp-number'))
    /* classList.toggle() adds the class if not exists, and removes the class
       if exists */
    // foodType.classList.toggle('violet')
    if (foodType.classList.contains('violet')) {
        foodType.classList.replace('violet','yellow')
        numOfPers.classList.replace('violet','yellow')
        numOfFood.classList.replace('violet','yellow')
    } else if (foodType.classList.contains('yellow')) {
        foodType.classList.replace('yellow','violet')
        numOfPers.classList.replace('yellow','violet')
        numOfFood.classList.replace('yellow','violet')
    } else {
        foodType.classList.add('violet')
        numOfPers.classList.add('violet')
        numOfFood.classList.add('violet')

    }

    console.log(foodType.className)
    console.log(numOfPers.className)
    
 
}
            

                
        
        