var speed = +prompt("Введите скорость");

switch (true) {
    case (speed > 90) :
        document.write("формула1 отдыхает");
        break;
    case (speed > 60) :
        document.write("с ветерком");
        break;
    case (speed > 40) :
        document.write("скучно");
        break;
    case (speed > 20) :
        document.write("задерживаешь движение");
        break;
    case (speed > 0) :
        document.write("медленнее улитки");
        break;
}