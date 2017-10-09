export class Helper {
  // Generate random numbers within range
  static get_random_int(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  static get_random_float(min, max) {
    return Math.random() * (max - min + 1) + min;
  }

  static get_bounded_index(grid_length, index) {
    let bounded_index = index;

    if(index < 0) {
      bounded_index = index + grid_length;
    }
    if(index >= grid_length) {
      bounded_index = index - grid_length;
    }

    return bounded_index
  }


  static shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
}
