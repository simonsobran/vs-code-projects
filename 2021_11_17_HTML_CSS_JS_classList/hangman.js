/* 

Виселица. 

   Имеется готовый массив слов,
   программа случайным образом выбирает слово.

   Example:
   var words = ['stranger','encyclopedy','terrorism','hangman']

   (May use randomizer, may use Math.floor(Math.random ...))

   а его противник отгадывает. 
   
   Программа
   показывает первую и последнюю букву
   и принимает от второго игрока буквы.
   h _ _ _ _ _ n
   Каждый раз отображаются правильные буквы.
   Игрок может вводить буквы в поле input или выбирать буквы из списка кнопок
   (через Event Listener),
   или (3 вариант) - нажатием на клавишу.
   У него есть 10 попыток - если на 10-ой
   он не отгадал всё слово, то проиграл. Должен быть счетчик.
   
   Можно ли, чтобы буквы повторялись в загадываемом слове.
   Скажем, shirt. 
   s _ _ _ t
   Человек вводит h.
   indexOfLetter = word.indexOf('h')
   guessedWord[indexOfLetter] = 'h'
   s h _ _ t

   А если буквы повторяются?
   Опция 1: проходим циклом по всем буквам и сравниваем ...
   Опция 2:

   Запускаем indexOf - если не нашел букву - ошибка, считаем еще одну попытку
   Если нашел букву, то выполняем все действия , и пробуем снова indexOf c этого места

   Example:
  
   word = 'encyclopedy' 
   // used function to create initial almoust empty array
   guessedWord = ['e','_','_','y','_','_','_','_','e','_','y']
   letter = 'c'
   indexOfLetter = word.indexOf(letter)
   while (indexOfLetter > -1){
        guessedWord[indexOfLetter] = letter
        indexOfLetter = word.indexOf(letter,indexOfLetter+1)
   } 


 */





