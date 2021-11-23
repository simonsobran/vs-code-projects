var a = 6;
var b = 8;

console.log("a = " + a + ', ' + "b = " + b);
/*
var c = a;

var a = b;
var b = c; 

console.log("a = " + a + ', ' + "b = " + b); */

a = a + b;
b = a - b;
a = a - b;

console.log("a = " + a + ', ' + "b = " + b);

alert("very cool");

var name = prompt("What is your name?");
var age = prompt(name + " how old are you?");
alert(name + ", you are " + age + " years old");

console.log(typeof name);

/*
if ( age < 16.5) {
    alert("Don't cry like a lil baby you are " + name)
}  else alert("one sec")
    if (age > 16.5 & )
*/