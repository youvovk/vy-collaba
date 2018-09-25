/*function sortByYear(arr) {
  let sortYear = arr.sort(function (a, b) {
	
  if (a.year > b.year) {
    return 1;
  }
  if (a.year < b.year) {
    return -1;
  }
  
  return 0;

  //return a.year - b.year;
	
  }); 

  return sortYear
} 
let returnSortYear = sortByYear(filmsInJSON)

console.log(returnSortYear);*/

/*function filterByYears (arr, minYear, maxYear) {
  if (!minYear && !maxYear) {
    return arr;
  }

  let filteredFilms = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].year > minYear && arr[i].year < maxYear) {
      filteredFilms.push(arr[i])
    }
  }

  return filteredFilms;
}

let result = filterByYears(filmsInJSON, 2000, 2010); 
console.log(result);  */


/*function getAmountByGenres(arr) {
	  let comedy = 0;
      let drama = 0;
      let melodrama = 0;
      let documentary = 0;
         
	  for (let i = 0; i < arr.length; i++) {

		  if (arr[i].genre == "comedy") {

			  comedy++;

		  } else if (arr[i].genre == "drama") {

		  	  drama++

		  } else if (arr[i].genre == "melodrama") {

              melodrama++

		  } else if (arr[i].genre == "documentary") {

              documentary++

		  }
	  }

	let map = [{
  	  comedy: comedy,
  	  drama: drama,
  	  melodrama: melodrama,
  	  documentary: documentary
    }]

    return map
}
let allSortGenre = getAmountByGenres(filmsInJSON)
console.log(allSortGenre)
console.log(filmsInJSON)*/

/*function getTotalDuration(arr) {

	let durationAll = [];
	let sumDuration = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i].duration > 0) {
			durationAll.push(arr[i].duration);

		}

	} 
	for (let p = 0; p < durationAll.length; p++) {
		sumDuration += durationAll[p];
	}
	console.log(durationAll);
	console.log(sumDuration);
	
}

let durationArr =  getTotalDuration(filmsInJSON);*/


/*function getTotalCommentsByFilm(arr, idFilm) {

  let totalComments = [];

  for (let i = 0; i < arr.length; i++) {

    if (arr[i].id == idFilm) {
  	  totalComments.push(arr[i].comments);
  	   	  
  	   } 
  } 
    return totalComments[0].length;
}

let sumComment = getTotalCommentsByFilm(filmsInJSON, 1);
console.log(sumComment);*/

/*function getCommentsByAuthorId(arr, autId) {

  let arrAuthor = [];

  for (let i = 0; i < arr.length; i++) {
      
    arrAuthor.push(arr[i].comments);
      
  }

  let arrAllAut = [];
  for(let j = 0; j < arrAuthor.length; j++) {
    for(let n = 0; n < arrAuthor.length; n++) {
      if (arrAuthor[j][n]) {

        arrAllAut.push(arrAuthor[j][n]);
      }
    
    }
  }

  let arrOneAut = [];
  for (let p = 0; p < arrAllAut.length; p++) {
    if (arrAllAut[p].authorId == autId) {

      arrOneAut.push(arrAllAut[p]);
 	}
  }

  return arrOneAut;
}

let authorComments = getCommentsByAuthorId(filmsInJSON, 1003);
console.log(authorComments);*/

function getRatingByFilmId(arr, filmId) {

  let arrComments = [];

   for (let s = 0; s < arr.length; s++) {
      
     if (arr[s].id == filmId) {

       arrComments.push(arr[s].comments);
     }
      
   }
  
  let arrOneFilm = [];
    for(let l = 0; l < arrComments.length; l++) {
      for(let p = 0; p < arr.length; p++) {
        if (arrComments[l][p]) {

          arrOneFilm.push(arrComments[l][p]);
        }
      }
    }


  let arrRatingByFilm = [];

  for (let v = 0; v < arrOneFilm.length; v++) {

  	if (arrOneFilm[v].rating) {

  	  arrRatingByFilm.push(arrOneFilm[v].rating);
  	}
  } 
  
  let sumRating = 0;
  
  for (let z = 0; z < arrRatingByFilm.length; z++) {

    sumRating += arrRatingByFilm[z];
  }

  sumRating /= arrRatingByFilm.length;
  let roundOff = sumRating.toFixed(1);

  
  return roundOff;
}

//let ratingFilm = getRatingByFilmId(filmsInJSON, 8);
//console.log(ratingFilm);

function sortByRating(arr) {

  let arrMyRating = [];

  for (let i = 1; i < arr.length + 1; i++) {

     let ratingFilm = getRatingByFilmId(arr, i);
     arrMyRating.push(ratingFilm);

   } 
   
  for (let u = 0; u < arr.length; u++) {

     if (arr[u]) {
       arr[u].rating = arrMyRating[u];
     }
   }

  let sortYear = arr.sort(function (a, b) {
  
    if (a.rating < b.rating) {
      return 1;
    }
    
    if (a.rating > b.rating) {
      return -1;
    }
  
    return 0;

  }); 

  return sortYear;
}


let sortArrRatingComments = sortByRating(filmsInJSON)
console.log(sortArrRatingComments)

