const movies = require('./data')
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(directors) {
  const arrDirectors = directors.map((currentElement)=>{
    return currentElement.director
  })
  const arrFilter = arrDirectors.filter((director,index)=>{
    return arrDirectors.indexOf(director) === index;
  }
  )
  // console.log(arrFilter)
  return arrFilter

  }
getAllDirectors(movies);


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(manyMovies) {
const arrSteven = manyMovies.filter((movieSteven) => {
return movieSteven.director.includes('Steven Spielberg') && movieSteven.genre.includes("Drama")
})
console.log(arrSteven)
return arrSteven.length
}
howManyMovies(movies);


// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(scores) {
const arrScores = scores.map((currentElement)=>{
  return currentElement.score
})
let calc = arrScores.length
let result = (arrScores.reduce((a,b) => a +b)/calc
)
return calc
}
scoresAverage(movies);

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(arr) {
  const drama = 'Drama';
  const arrDrama = arr.filter((element) =>(item.genre.indexOf(drama) >= 0))
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arrYear) {
  const years = arrYear.sort((a,b) =>{
    return a.year - b.year
  })
 return(years)
}
orderByYear(movies);

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(orderTitle) {
  const newArrTitle = orderTitle.sort((a,b) => {
return (a.title > b.title) ? 1:((b.title > a.title)? -1: 0)
  })
 return newArrTitle.slice(0,20)
}
orderAlphabetically(movies);

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
