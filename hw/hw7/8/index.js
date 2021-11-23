var birthDay = +prompt("Какой по счёту день рождения?");

switch (true) {
    case birthDay == 40 :
        document.write("Ты можешь идти учиться, работать, водить машину, пить алкоголь, изучать каббалу");
        break;
    case birthDay == 18 :
        document.write("Ты можешь идти учиться, работать, водить машину, пить алкоголь");
        break;
    case birthDay == 17 :
        document.write("Ты можешь идти учиться, работать, водить машину");
        break;
    case birthDay == 12 :
        document.write("Ты можешь идти учиться, работать");
        break;
    case birthDay == 6 :
        document.write("Ты можешь идти учиться");
        break;
    default :
        document.write("Тебе " + birthDay + " лет! Молодец");
        break;
}