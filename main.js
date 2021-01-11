function player(name, marker) {
    this.name = name,
    this.marker = marker,
    this.sayName = function() {
        console.log(name)
    }
}

const player1 = new player('steve', 'X');
console.log(player.name); 
player1.sayName();

function Book(title, numOfPages, readStatus) {
    this.title = title,
    this.numOfPages = numOfPages,
    this.readStatus = readStatus,
    this.info = function() {
      return ("Title: " + String(title) + "\nNumber of pages: " + String(numOfPages) + "\nRead Status: "+ String(readStatus));
    }
  }
  
  theHobbit = new Book("The Hobbit by J.R.R. Tolkien", 295, "not read yet");
  console.log(theHobbit.info());
  
  /**/ */
  
  function PrintStuff (myDocuments) {
  this.documents = myDocuments;
  }
  
  // We add the print () method to PrintStuff prototype property so that other instances (objects) can inherit it:
  PrintStuff.prototype.print = function () {
  console.log(this.documents);
  }
  
  // Create a new object with the PrintStuff () constructor, thus allowing this new object to inherit PrintStuff's properties and methods.
  var newObj = new PrintStuff ("I am a new Object and I can print.");
  
  // newObj inherited all the properties and methods, including the print method, from the PrintStuff function. Now newObj can call print directly, even though we never created a print () method on it.
  newObj.print (); //I am a new Object and I can print.