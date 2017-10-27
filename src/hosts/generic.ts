import {Vector} from "../helper/vector"

export class Generic {
  constructor() {

  }

  get_vision_indices(radius) {
    let indices = [];
    let total_area = 4 * (radius**2 + radius);
    let side = (2 * radius) + 1;

    // Check if cell is within euclidean area
    for(let x = 0; x < side; x++) {
      for( let y = 0; y < side; y++) {

      }
    }
  }
}
