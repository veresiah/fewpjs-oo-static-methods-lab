class Formatter {
  //add static methods here
  static capitialize(string) {
    return string.charAt( 0 ).toUpperCase() + string.slice( 1 )
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, '')
  }

  static titleize(string) {
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let result = [];
    let sentence = string.split(' ')
    for (let i = 0; i < sentence.length; i++) {
      if (i == 0) {
        result.push(this.capitialize(sentence[i]))
      } else {
        if (exceptions.includes(sentence[i])) {
          result.push(sentence[i])
        } else {
          result.push(this.capitialize(sentence[i]))
        }
      }
    }
    return result.join(' ');
  }
}