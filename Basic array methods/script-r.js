function sortByYear(arr) {
   let sortYear = arr.sort(function (a, b) {
    return a.year - b.year;
  });

  return sortYear;
}
let returnSortYear = sortByYear(filmsInJSON);

  //console.log(returnSortYear);

function filterByYears(arr, minYear, maxYear) {
  if (!minYear && !maxYear) {
    return arr;
  }

  let arrFilteredFilmsYears = arr.filter(function(name) {
    if (
      (name.year > minYear && name.year < maxYear) ||
      (name.year > minYear && !maxYear) ||
      (name.year < maxYear && !minYear)
    ) {
      
        return name;
      
    }
  });
  
  return arrFilteredFilmsYears;
}

let result = filterByYears(filmsInJSON, NaN, 1995);
//console.log(result);  


function getAmountByGenres(arr) {
  let genres = {};

  let arrAmountByGenres = arr.map(function(name) {
  	let genre = name.genre;

    if (genres[genre]) {
      genres[genre]++;
    } else {
      genres[genre] = 1;
    }
  })
      
  return genres;
}

let allSortGenre = getAmountByGenres(filmsInJSON);
//console.log(allSortGenre);
//console.log(filmsInJSON);

function getTotalDuration(arr) {
  let sumDuration = 0;
  
  let arrTotalDuration = arr.map(function(name) {
    if (name.duration) {
      sumDuration += name.duration;
    }
   }) 
    //console.log(sumDuration);
}

let durationArr = getTotalDuration(filmsInJSON);


function getTotalCommentsByFilm(arr, filmId) {
  let totalComments = 0;
  let arrTotalCommentByFilm = arr.map(function(name) {
	  if (name.id === filmId) {
      totalComments = name.comments.length;
    }
})
    
  
  return totalComments;
}

let sumComment = getTotalCommentsByFilm(filmsInJSON, 1);
//console.log(sumComment);

function getCommentsByAuthorId(arr, authorId) {
  let authorComments = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].comments.length; j++) {
      if (arr[i].comments[j].authorId === authorId) {
        authorComments.push(arr[i].comments[j]);
      }
    }
  }

  /*let arrComments = arr.map(function(name) {
  	name.comments.map(function(comm) {
  		if (comm.authorId === authorId) {
        return name.comm;
      }
  	})
  })*/

  return authorComments;
}

let authorComments = getCommentsByAuthorId(filmsInJSON, 1003);
console.log(authorComments);

// Utility
function getFilmRating(film) {
  let sumRating = 0;
  let ratingCount = 0;

  for (let i = 0; i < film.comments.length; i++) {
    if (film.comments[i].rating) {
      sumRating += film.comments[i].rating;
      ratingCount++;
    }
  }

  return (sumRating / ratingCount).toFixed(1);
}

function getRatingByFilmId(arr, filmId) {
  let filmRating = 0;

  let arrRatingByFilmId = arr.map(function(name){
  	 if (name.id === filmId) {
       filmRating = getFilmRating(name)

     break;
    }
  })
  
  return filmRating;
}

function sortByRating(films) {
  return films.sort(function (a, b) {
    return getFilmRating(a) - getFilmRating(b);
  });
}


let sortArrRatingComments = sortByRating(filmsInJSON)
//console.log(sortArrRatingComments)


