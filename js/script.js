"use strict";

//alert('Hello');

//const result = confirm('Are you here?');

//const answer = prompt('Are you 18?', '18');

/* const answers = [];

answers[0] = prompt('Are you 18?', '');
answers[1] = prompt('Your name?', '');
answers[2] = prompt('Where are you from?', '');

document.write(answers); */

/* const category = 'toys';

console.log(`https://someurl.com/${category}/5`); */

/* const user = 'Ron';

alert(`Hello, ${user}`); */

/* let incr = 10,
    decr = 10;

incr++;
decr--;

console.log(incr, decr); */


/* console.log(2 * 4 === +'8'); */

/* const isChecked = true,
    isClosed = true;
console.log(isChecked && isClosed); */

/* const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};


const a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?', ''),
    c = prompt('Один из последних просмотренных фильмов?', ''),
    d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;


console.log(personalMovieDB); */

//Условия:

/* if (4 == 9) {
    console.log('Ok!');
} else {
    console.log('Error');
}

const num = 50;

if (num < 49) {
    console.log('Error!');
} else if (num > 100) {
    console.log('A lot!')
} else {
    console.log('Right!')
}

switch (num) {
    case 49:
        console.log('Mistake');
        break;
    case 100:
        console.log('Mistake');
        break;
    case 50:
        console.log('Right');
        break;
    default:
        console.log('Not that time');
        break;
} */


//Циклы:

/* //1-й способ
let num = 50;

while (num < 55) {
    console.log(num);
    num++;
}

//2-й способ
do {
    console.log(num);
    num++;
}
while (num < 55);

//3-й спосооб
for (let i = 1; i < 10; i++) {
    if (i === 6) {
        //break;
        continue;
    }

    console.log(i);
} */

/* //Функции:

//1 - Function declaration: 
let num = 20;

function showFirstMessage(text) {
    console.log('text');
    let num = 10;
}

showFirstMessage("Hello world!");
console.log(num);

function calc(a, b) {
    return (a + b);
}

console.log(calc(4, 5));
console.log(calc(7, 3));
console.log(calc(24, 8));

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

//2 - function expression:

const logger = function() {
    console.log("Hello!");
};

logger();

//3 - Стрелочные функции:

const calcular = (a, b) => {
    console.log("1");
    return a + b;
}; */

/* //Методы и свойства строк и чисел: 

const str = "test";
const arr = [1, 2, 6];

console.log(str.length);
console.log(str[2]);

console.log(str.toUpperCase());
console.log(str);

const fruit = "Some fruit";
console.log(fruit.indexOf("fruit"));

const logg = "Hello world";

console.log(logg.slice(6, 11));

console.log(logg.substring(6, 11));

console.log(logg.substr(6, 5));

const num = 12.5;
console.log(Math.round(num));

const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test)); */

//Callback - fuction:

/* function first() {
    //do smth
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log(`I learn: ${lang}`);
    callback();
}

function done() {
    console.log('Have done that lesson');
}

learnJS('JavaScript', done); */

//Objects:

/* const option = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log('Test');
    }
};

option.makeTest();

const { border, bg } = option.colors;
console.log(border);

console.log(Object.keys(option).length);

delete option.name;
console.log(option);

let counter = 0;

for (let key in option) {
    if (typeof(option[key]) === 'object') {
        for (let i in option[key]) {
            console.log(`Свойство ${i} имеет значение ${option[key][i]}`);
            counter++;
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${option[key]}`);
        counter++;
    }
}

console.log(counter); */

//Array:

/* const arr = [1, 2, 3, 6, 8];
arr[99] = 0;
console.log(arr.length);
console.log(arr);

arr.sort(compareNum);

function compareNum(a, b) {
    return a - b;
}

arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item}  внутри массива ${arr}`)
});


arr.pop();
arr.push(10);

console.log(arr);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let value of arr) {
    console.log(value);
}

const str = prompt('', '');
const product = str.split(', ');
product.sort();
console.log(product.join('; ')); */

//Передача по ссылке или по значению:

/* let a = 5,
    b = a;

b = b + 5;

const obj = {
    a: 5,
    b: 1
};

const copy = obj;

copy.a = 10;

function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;

console.log(newNumbers);
console.log(numbers);

const add = {
    d: 17,
    e: 20
};

const clone = Object.assign({}, add);

clone.d = 20;

console.log(add);
console.log(clone);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'fjdslak';

console.log(newArray);
console.log(oldArray);


const video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'instagram', 'telegram'];

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);

const array = ["a", "b"];
const newAarray = [...array];

const q = {
    one: 1,
    two: 2
};

const newObj = {...q }; */

//Основы ООП:

/* let str = 'some';
let strObj = new String(str);

console.log(typeof(str));
console.log(typeof(strObj));

console.dir([1, 2, 3]);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('Hello!');
    }
};

const john = Object.create(soldier);

// const john = {
//     health: 100
// };

//john.__proto__ = soldier;\
//Object.setPrototypeOf(john, soldier);

console.log(john);
john.sayHello(); */