class Letter {
  constructor(char) {
    this.char = char;
    if(char.length === 1 && char.match(/[a-z]/i)) {
        this.visible = false;
    }else {
        this.visible = true;
    }
  }
  toString() {
    if(this.visible === false){
        return "_"
    } 
    if(this.visible === true){
        return this.char
    }
  }
  guess(character){
    if(character === this.char) {
        this.visible = true
        return true
    } else {
        return false
    }
  }
  getSolution(){
    return this.char
  }
}

module.exports = Letter;
