const numberOfFilms = +prompt ("How many movies have u already watched?", ' ');
const personalMovieDB = {
    "count" : numberOfFilms,
    "movies" : {},
    "actors" : {},
    "genres" : [],
    "privat" : false
};


    for (let i = 0; i < 2; i++){
        const a = prompt("Your last viewed movie?",' '),
              b = prompt("What is ur grade?", ' ');

        if (a != null && b != null && a != " " && b != " " && a.length < 50){
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    }

    if (personalMovieDB.count < 10){
        console.log('less');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ){
        console.log('Normal');
    } else {
        console.log("MovieHunter!");
    }


console.log(personalMovieDB);
