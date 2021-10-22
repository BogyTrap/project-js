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