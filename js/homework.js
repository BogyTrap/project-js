'use strict';

//1:
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


/* const a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?', ''),
    c = prompt('Один из последних просмотренных фильмов?', ''),
    d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d; */

//2:

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('Done!');
    } else {
        console.log('Error!');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log("Sooo, you're really don't like watching films. That's sad:(");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Oh, great! I think you're enjoing to watch movies, but you should do it more;)");
} else if (personalMovieDB.count >= 30) {
    console.log("You're watching a master at work");
} else {
    console.log("This is fucking error, little idiot!");
}

console.log(personalMovieDB);