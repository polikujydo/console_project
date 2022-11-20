
const personalMovieDB = {
    "count" : 0,
    "movies" : {},
    "actors" : {},
    "genres" : [],
    "privat" : false,
    start: function (){
        personalMovieDB.count = prompt ("How many movies have u already watched?", ' ');
    
        while (personalMovieDB.count == " " || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = prompt ("How many movies have u already watched?", ' ');
        }
    },
    rememberMyFilms: () => {
        for (let i = 0; i < 2; i++){
        const a = prompt("Your last viewed movie?",' '),
              b = prompt("What is ur grade?", ' ');

        if (a != null && b != null && a != " " && b != " " && a.length < 50){
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    }
    },
        detectLevel: () => {
            if (personalMovieDB.count < 10){
            console.log('less');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ){
            console.log('Normal');
        } else {
            console.log("MovieHunter!");
        }
    },
    
    toggleVisibleMyDB: () =>{
        if (personalMovieDB.privat){
            personalMovieDB.privat === false;
        } else{
            personalMovieDB.privat === true;
        }
    },

        showMyDB: function (hidden){
            if(!hidden){
                console.log(personalMovieDB);
            }
    },
        
        writeYourGenres: function (){
            for (let i = 1; i <=3; i++){
                let genre = prompt (`Your favourite genre has a number ${i}` );
                
                if (genre == " " || genre == null){
                    i--;
                } else{

                personalMovieDB.genres[i - 1];

                }
            }
        personalMovieDB.genres.forEach((item, index) => {
            console.log(`Your favourite genre ${index + 1} is ${item}`);
        });   
    }
};


