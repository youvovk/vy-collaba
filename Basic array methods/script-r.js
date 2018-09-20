/*let num = filmsInJSON.sort(function (a, b) {
	
  if (a.year > b.year) {
    return 1;
  }
  if (a.year < b.year) {
    return -1;
  }
  
  return 0;

  //return a.year - b.year;
	
}); //FIRST TASK 

console.log(num);

function filterByYears (arr, minYear, maxYear) {
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

let result = filterByYears(filmsInJSON, 2000, 2010); //TWISE TASK
console.log(result);  */

/*let op = filmsInJSON.sort(function (a, b) {
	if (a.genre > b.genre) {
    return 1;
  }
  if (a.genre < b.genre) {
    return -1;
  }
  
  return 0;
	
  })*/
 
 

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
let go = getAmountByGenres(filmsInJSON)
console.log(go)
console.log(filmsInJSON)*/