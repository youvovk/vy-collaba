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

  let arrFilteredFilmsYears = arr.filter(function(film) {
    if (
      (film.year > minYear && film.year < maxYear) ||
      (film.year > minYear && !maxYear) ||
      (film.year < maxYear && !minYear)
    ) {
      
        return film;
      
    }
  });
  
  return arrFilteredFilmsYears;
}

let result = filterByYears(filmsInJSON, NaN, 1995);
//console.log(result);  


function getAmountByGenres(arr) {
  let genres = {};

   arr.forEach(function(name) {
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

function getTotalDuration(arr) {
  let sumDuration = 0;
  
   arr.forEach(function(name) {
    if (name.duration) {
      sumDuration += name.duration;
    }
   }) 
    //console.log(sumDuration);
}

let durationArr = getTotalDuration(filmsInJSON);


function getTotalCommentsByFilm(arr, filmId) {
  let totalComments = 0;
   arr.forEach(function(name) {
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

  arr.forEach(function(name) {
     name.comments.forEach(function(comm) {
      if (comm.authorId === authorId) {
        authorComments.push(comm);
      }
    })
  })
   return authorComments
}

let authorComments = getCommentsByAuthorId(filmsInJSON, 1003);
//console.log(authorComments);

// Utility
function getFilmRating(film) {
  let sumRating = 0;
  let ratingCount = 0;

  film.comments.forEach(function(name) {
  	if (name.rating) {
      sumRating += name.rating;
      ratingCount++;
    }
  })
    
  return (sumRating / ratingCount).toFixed(1);
}


function getRatingByFilmId(arr, filmId) {
  let film = arr.find(name => name.id === filmId)
  
  return getFilmRating(film);
}

function sortByRating(films) {
  return films.sort(function (a, b) {
    return getFilmRating(a) - getFilmRating(b);
  });
}


let sortArrRatingComments = sortByRating(filmsInJSON)
//console.log(sortArrRatingComments)


