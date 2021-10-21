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