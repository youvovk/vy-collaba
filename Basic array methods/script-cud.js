function removeFilm (arr, filmId) {
 
  for (let i = 0; i < arr.length; i++) {
    
    if (arr[i].id == filmId) {
           arr.splice(i, 1);
           return arr;
        }
  }
  
}
// let newArr = removeFilm(filmsInJSON, 1);
//console.log(newArr);

function removeComment(arr, filmId, commentId) {
   
   for (let i = 0; i < arr.length; i++) {
       if (arr[i].id == filmId) {
        for (let j = 0; j < arr[i].comments.length; j++) {
           if (arr[i].comments[j].id == commentId) {
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
   for (let i = 0; i < arr.length; i++) {

     if (arr[i].id == filmId) {
      
       objectNewComents.id = arr[i].comments.length;
       arr[i].comments.push(objectNewComents);

       return arr;

     }
   }
   
}
// addCommentToFilm(filmsInJSON, 18, {title: 'foo', authorId: null, authorName: "", text: "", rating: null});

function updateFilmInfo(arr, filmId, updateParams) {
  let copy = arr.slice();

  for (let i = 0; i < copy.length; i++) {
    if (copy[i].id === filmId) {
      let keys = Object.keys(updateParams);

      for (let j = 0; j < keys.length; j++) {
        let key = keys[j];
        let value = updateParams[key];

        if (copy[i][key] !== undefined) {
          copy[i][key] = value;

        }
      }
    }
  }
  
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

     for (let k = 0; k < newCommentByFilm.length; k++) {
       let keyComment = newCommentByFilm[k];
       let valueComment = newComment[keyComment];
       arrCommentId.push(keyComment);
       arrCommentValue.push(valueComment);

     }

     for (let r = 0; r < keys.length; r++) {
        let keysId = keys[r];
        let keysValueFilmComments =  filmCommentId[keysId];
        arrId.push(keysId);
        arrFilmComm.push(keysValueFilmComments);
      } 
   }
    
   for (let i = 0; i < copy.length; i++) {
     if (copy[i].id === arrFilmComm[0]) {
         
       for (let j = 0; j < copy[i].comments.length; j++) {
                    
         if (copy[i].comments[j].id === arrFilmComm[1] ) {
        
           copy[i].comments[j][arrCommentId[0]] = arrCommentValue[0];
        
         }
       }
     }  
   }
  
  return copy;

}
console.log(updateComment(filmsInJSON, {idFilm: 5, idComm: 2}, {text: "1"}));
