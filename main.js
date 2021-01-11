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

  //Creates an object constructor via object literal syntax
function Student() {
}

//Add a sayName function to the Student Prototype that console.logs the instanced objects name
Student.prototype.sayName = function() {
  console.log(this.name)
}

//creates an object constructor that takes in a name and assigns the passed in name and integer 8 to the declared attributes
function EighthGrader(name) {
  this.name = name
  this.grade = 8
}

//from Student.prototype: contains a sayName function that logs the instanced objects name
//from Object.create: creates a new instance of the object with the specified prototype object and properties
EighthGrader.prototype = Object.create(Student.prototype)
//Object.create() sets up a copy to be inherited from. Strict = asignment will change the literal and erase or clear the original object
const carl = new EighthGrader("carl")
carl.sayName() // console.logs "carl"
carl.grade // 8
