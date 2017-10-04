import {Vector} from "../helper/vector"

export class Vision {
  indices = [];

  constructor(private vision) {
    this.precompute_vision_indices(vision);
  }

  precompute_vision_indices(radius) {
    let indices = [];

    // Check if cell is within euclidean area
    for(let x = -radius; x <= radius; x++) {
      for( let y = -radius; y <= radius; y++) {
        if(Math.round(Math.sqrt((0 - x)**2+(0 - y)**2)) <= radius) {
          indices.push([x, y])
        }
      }
    }

    this.indices = indices;
  }

  get_vision_indices(position) {
    let out = [];

    for(let cell of this.indices) {
      out.push([position.x + cell[0], position.y + cell[1]])
    }

    return out
  }
}
