/*
var inputFieldOne = document.getElementById('inp1');
var h3ElementOne = document.getElementById('h3-1');

console.log(inputFieldOne);
console.log(typeof inputFieldOne);

console.log(h3ElementOne);
console.log(typeof h3ElementOne);

function viewInputValue() {
    h3ElementOne.innerText = 'Value of inputFieldOne : ' + inp1.value;
}
*/

var inpField1 = document.getElementById('inp1');
var inpField2 = document.getElementById('inp2');
var h3Element1 = document.getElementById('h3-1');
var h3Element2 = document.getElementById('h3-2');

// console.log(inpField1) - element of the document
// console.log(typeof inpField1) - object

// function viewInp1Value() {
//     console.log('Value of inpField1: '+inpField1.value)
// }

// function viewInp1Value() {
//      document.write('<h3>Value of inpField1: '+inpField1.value+'</h3>')
// }

function viewInp1Value() {
    console.log("This is the old text: "+ h3Element1.innerText);
    h3Element1.innerText = 'Value of inpField1: ' + inpField1.value;
}
function viewInp2Value() {
    num = +inpField2.value;
    console.log("This is the old text: "+ h3Element2.innerText);
    h3Element2.innerText = 'Type of number: ' + num + ' is ' + typeof num;
}