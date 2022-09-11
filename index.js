class Formatter {
  //add static methods here
  // constructor(string){
  //   this.string = string;
  // }

  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-'\s]+/g, "");
  }

  static titleize(string){
   let lowercase = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
   let uppercase = [];
   let words = string.split(" ")
   for ( let i = 0; i < words.length; i++){
    if (i == 0){
      uppercase.push(this.capitalize(words[i]))
    } else {
      if (lowercase.includes(words[i])){
        uppercase.push(words[i])
      } else{
        uppercase.push(this.capitalize(words[i]))
      }
    }
   }
   return uppercase.join(" ")
  }
}