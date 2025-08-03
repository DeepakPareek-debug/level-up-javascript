// Write your code here
// function Movie(title, director, genre, releaseYear, rating){
// this.title = title;
// this.director = director;
// this.genre = genre;
// this.releaseYear = releaseYear;
// this.rating = rating;
// }

// Movie.prototype.getOverview = function(){
//   return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}`;
// }

// const SpiderMan = new Movie("SpiderMan","MCU","Action","2020",90);
// const BatMan = new Movie("BatMan","DC","Action","2020",91);

// console.log(SpiderMan.getOverview());
// console.log(BatMan.getOverview());

class Movie{
  constructor(title, director, genre, releaseYear, rating){
this.title = title;
this.director = director;
this.genre = genre;
this.releaseYear = releaseYear;
this.rating = rating;
  }

  getOverview(){
    return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}`;
  }
}

const SpiderMan = new Movie("SpiderMan","MCU","Action","2020",90);
const BatMan = new Movie("BatMan","DC","Action","2020",91);

console.log(SpiderMan.getOverview());
console.log(BatMan.getOverview());