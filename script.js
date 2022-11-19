let numberOfFilms;

function start (){
    numberOfFilms = prompt ("How many movies have u already watched?", ' ');

    while (numberOfFilms == " " || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = prompt ("How many movies have u already watched?", ' ');
    }
}

start();


const personalMovieDB = {
    "count" : numberOfFilms,
    "movies" : {},
    "actors" : {},
    "genres" : [],
    "privat" : false
};


    function rememberMyFilms () {
        for (let i = 0; i < 2; i++){
        const a = prompt("Your last viewed movie?",' '),
              b = prompt("What is ur grade?", ' ');

        if (a != null && b != null && a != " " && b != " " && a.length < 50){
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    }
}

rememberMyFilms();

    function detectLevel () {
        if (personalMovieDB.count < 10){
        console.log('less');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ){
        console.log('Normal');
    } else {
        console.log("MovieHunter!");
    }
}

detectLevel();

function showMyDB(hidden){
    if(!hidden){
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres (){
    for (let i = 1; i <=3; i++){
        const genre = prompt (`Your favourite genre has a number ${i}` );
        personalMovieDB.genres[i - 1];
    }
}

writeYourGenres();
