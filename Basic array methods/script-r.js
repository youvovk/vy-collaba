let num = filmsInJSON.sort(function (a, b) {
	
  if (a.year > b.year) {
    return 1;
  }
  if (a.year < b.year) {
    return -1;
  }
  // a должно быть равным b
  return 0;

  //return a.year - b.year;
	
}); //FIRST TASK 

console.log(num);


