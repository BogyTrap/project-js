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

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

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


console.log(personalMovieDB);