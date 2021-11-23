var John = {
    firstName:'John',
    lastName:'Smith',
    birthYear:1995,
    familyMembers:['Mary','Jack','Richard','Margaret'],
    job:'teacher',
    isMarried:false,
    calcAge:function() {
        var currDate = new Date();
        return currDate.getFullYear() - this.birthYear; //не обрабатываем кейс, когда не было дня рождения 
    },
    setAge:function() {
        this.age = this.calcAge();
    }
};
//getDay(), getDate(), getMonth()

console.log(John.birthYear);
console.log(John.firstName);
console.log(John['lastName']);

var propertyName = 'isMarried';
if (John[propertyName]) { //узнаём значение ключа propertyName // 'isMarried'
    console.log('John is married! wow');
} else {
    console.log('John gonna be married! tomorrow');
}

console.log(typeof John.birthYear);

John.country = 'Israel';
John.city = 'Ayanot';
John['city'] = 'Petach-Tikva';

console.log(John);

var Jane = new Object();

Jane.firstName = 'Jane';
Jane['birthYear']  = 2002;

console.log(John);
console.log(John.calcAge(1990));
John.setAge();