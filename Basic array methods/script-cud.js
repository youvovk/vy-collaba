function removeFilm (arr, filmId) {
 
  let correctlyFilms = arr.filter(function(noFilmRemove) {
    if (noFilmRemove.id !== filmId) {           
      return noFilmRemove;
    }
  })

   return correctlyFilms;
}
//let newArr = removeFilm(filmsInJSON, 1);
//console.log(newArr);

function removeComment(arr, filmId, commentId) {
   
  for (let i = 0; i < arr.length; i++) {
   if (arr[i].id === filmId) {
     for (let j = 0; j < arr[i].comments.length; j++) {
       if (arr[i].comments[j].id === commentId) {
         arr[i].comments.splice(j, 1);
         return arr;
        }
      }
    }
  }
}
//console.log(removeComment(filmsInJSON, 3, 4));

function addFilm(arr, newAddFilm) {
 
 newAddFilm.comments = [];
 newAddFilm.id = arr.length;
 arr.push(newAddFilm);
 
 return arr;
}
// addFilm(filmsInJSON, {title: "", genre: "", director: "", year: null, duration: null});

function addCommentToFilm(arr, filmId, objectNewComents) {

   let addNewCommentToFilm = arr.forEach( function(film) {   
     if (film.id === filmId) {      
       objectNewComents.id = film.comments.length;
       film.comments.push(objectNewComents);
     }
   })

    return arr;     
}
let correctlyAdd = addCommentToFilm(filmsInJSON, 18, {title: 'foo', authorId: null, authorName: "", text: "", rating: null});
//console.log(correctlyAdd);

function updateFilmInfo(arr, filmId, updateParams) {
  let copy = arr.slice();

  copy.forEach(function(film) {
    if (film.id === filmId) {
      let keys = Object.keys(updateParams);

      keys.forEach(function(infoByFilm) {
        let key = infoByFilm;
        let value = updateParams[key];

        if (film[key] !== undefined) {
          film[key] = value;
        }
      })    
    }
  })
  
  return copy;
}

//console.log(updateFilmInfo(filmsInJSON, 1, {title: "", genre: ""}));

function updateComment (arr, filmCommentId, newComment) {
   let copy = arr.slice();

   let arrId = [];
   let arrFilmComm = [];
   let arrCommentId = [];
   let arrCommentValue = [];

   for (let p = 0; p < 1 ; p++) {
     let keys = Object.keys(filmCommentId);
     let newCommentByFilm = Object.keys(newComment);

      newCommentByFilm.forEach(function(newComm) {
      let keyComment = newComm;
      let valueComment = newComment[keyComment];
      arrCommentId.push(keyComment);
      arrCommentValue.push(valueComment);

    })
          
     keys.forEach(function(key){
      let keysId = key;
      let keysValueFilmComments = filmCommentId[keysId];
      arrId.push(keysId);
      arrFilmComm.push(keysValueFilmComments);
     })   
}
    
    copy.forEach(function(film) {
      if (film.id === arrFilmComm[0]) {
         
        film.comments.forEach(function(upDateCmment){
          if (upDateCmment.id === arrFilmComm[1] ) {
           upDateCmment[arrCommentId[0]] = arrCommentValue[0];
          }
        })    
      }
    })

  return copy;

}
//console.log(updateComment(filmsInJSON, {idFilm: 5, idComm: 2}, {text: "1"}));
