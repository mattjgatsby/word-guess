const Letter = require("./Letter");

class Word {
  constructor(str) {
    this.letters = [];
    

    this.str = str.split("");
    
    for (let character of this.str) {
      this.letters.push( new Letter(character) );
    }
  }
  guessLetter(character){
    var guessed = false;
    for(let i = 0; i < this.letters.length; i++) {
        if(this.letters[i].char.toUpperCase() === character.toUpperCase()) {
            this.letters[i].visible = true
            guessed = true;
        }
    }
    return guessed;
  }
  toString(){
    return this.letters.join(" ")
  }
  guessedCorrectly(){
  for(let i = 0; i < this.letters.length; i++) {
    if(!this.letters[i].visible) {
        return false;
    }
  }
  return true
  }
}

module.exports = Word;
