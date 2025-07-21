// Write your code here
// function Book(title, Author, ISBN, numCopies){
//   this.title = title;
//   this.Author = Author;
//   this.ISBN = ISBN;
//   this.numCopies = numCopies;
// }

// Book.prototype.getAvailability = function(){
//   if(this.numCopies == 0)
//     return "Out of stock";
//   else if(this.numCopies <10)
//     return "low stock";
//   else
//     return "In stock";
// }

// Book.prototype.Sell = function(numCopiesSold = 1){
//     if(this.numCopies >= numCopiesSold){
//       this.numCopies -= numCopiesSold; 
//     }
//     else
//       return "doesn't have this many copies available";
// }

// Book.prototype.reStock = function(numCopiesRestock = 5){
//   this.numCopies += numCopiesRestock;
// }

// const HarryPotter = new Book("Harry Potter", "JK rowling", 12345678, 5);
// console.log(HarryPotter.getAvailability());

// console.log(HarryPotter.Sell(6));
// console.log(HarryPotter.getAvailability());

// HarryPotter.reStock(6);
// console.log(HarryPotter.getAvailability());

// HarryPotter.Sell(11);
// console.log(HarryPotter.getAvailability());

class Book {
  constructor(title, Author, ISBN, numCopies){
    this.title = title;
    this.Author = Author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
  }

  get availability(){
    this.getAvailability();
  }

  getAvailability(){
  if(this.numCopies == 0)
    return "Out of stock";
  else if(this.numCopies <10)
    return "low stock";
  else
    return "In stock";
  }

  Sell(numCopiesSold = 1){
    if(this.numCopies >= numCopiesSold){
      this.numCopies -= numCopiesSold; 
    }
    else
      return "doesn't have this many copies available";
  }

  reStock(numCopiesRestock = 5){
  this.numCopies += numCopiesRestock;
  }
}