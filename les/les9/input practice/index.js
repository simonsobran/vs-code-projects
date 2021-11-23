// Определитель треугольников

//    Ваша программа получает три значения - 
//    длины сторон треугольника.
//    Программа выдает ,
//    является ли треугольник равносторонним,
//    равнобедненным, и вообще, является ли он
//    треугольником (если сумма двух сторон равна
//    длине третьей, то это не треугольник, а отрезок).
//    Программа так же выдает информацию, является
//    ли треугольник прямоугольным (он при этом
//    может быть и равнобедренным).

var inputA = document.getElementById('a');
var inputB = document.getElementById('b');
var inputC = document.getElementById('c');

var spanResult = document.getElementById('span-result');

function setAll(letter) {
    document.getElementById('span-' + letter).innerText = document.getElementById(letter).value;
}
function getAll(letter) {
    return +document.getElementById(letter).value;
}

function checkTriangleType(n1, n2, n3) {
    var trType = '';
    if ((n1 + n2 < n3) || (n1 + n3 < n2) || (n2 + n3 < n1)) {
        return 'Not a Triangle';
    } else {
        if (n1 === n2 || n2 === n3 || n3 === n1) {
            if (n1 === n2 && n2 === n3) {
                return 'Equilateral';
            }
            trType = 'Isosceles';
        } 
        if ((n1 ** 2 + n2 ** 2 === n3 **2) || (n1 ** 2 + n3 ** 2 === n2 **2) || (n2 ** 2 + n3 ** 2 === n1 **2)) {
            if (trType) {
                return trType + ' and right triangle';
            } else
                return 'right';
        }
        if (trType) {
            return trType;
        } else return "regular";
    }
}

function setResult() {
    spanResult.innerText = checkTriangleType(getAll('a'), getAll('b'), getAll('c'));
}