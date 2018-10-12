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

  let filteredFilms = [];

  for (let i = 0; i < arr.length; i++) {
    if (
      (arr[i].year > minYear && arr[i].year < maxYear) ||
      (arr[i].year > minYear && !maxYear) ||
      (arr[i].year < maxYear && !minYear)
    ) {
      filteredFilms.push(arr[i]);
    }
  }

  return filteredFilms;
}

let result = filterByYears(filmsInJSON, NaN, 2000);
//console.log(result);  


function getAmountByGenres(arr) {
  let genres = {}

  for (let i = 0; i < arr.length; i++) {
    let genre = arr[i].genre;

    if (genres[genre]) {
      genres[genre]++;
    } else {
      genres[genre] = 1;
    }
  }

  return genres;
}

let allSortGenre = getAmountByGenres(filmsInJSON);
//console.log(allSortGenre);
//console.log(filmsInJSON);

function getTotalDuration(arr) {
  let sumDuration = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].duration) {
      sumDuration += arr[i].duration;
    }
  }

  //console.log(sumDuration);

}

let durationArr = getTotalDuration(filmsInJSON);


function getTotalCommentsByFilm(arr, filmId) {
  let totalComments = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === filmId) {
      totalComments = arr[i].comments.length;
    }
  }

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


  return authorComments;
}

let authorComments = getCommentsByAuthorId(filmsInJSON, 1003);
//console.log(authorComments);

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

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === filmId) {
      filmRating = getFilmRating(arr[i])

      break;
    }
  }

  return filmRating;
}

function sortByRating(films) {
  return films.sort(function (a, b) {
    return getFilmRating(a) - getFilmRating(b);
  });
}


let sortArrRatingComments = sortByRating(filmsInJSON)
//console.log(sortArrRatingComments)


