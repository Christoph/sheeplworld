import {Vector} from "../helper/vector"

export class Vision {
  indices = [];

  constructor(private vision, private type) {
    if( type == "radius") this.precompute_radius_vision_indices(vision);
    if( type == "cone") this.precompute_cone_vision_indices(vision);
    if( type == "half") this.precompute_half_vision_indices(vision);
  }

  precompute_radius_vision_indices(radius) {
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

  precompute_cone_vision_indices(radius) {
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

  precompute_half_vision_indices(radius) {
    let indices = [];

    // Check if cell is within euclidean area
    for(let x = -radius; x <= radius; x++) {
      for( let y = 0; y <= radius; y++) {
        if(Math.round(Math.sqrt((0 - x)**2+(0 - y)**2)) <= radius) {
          indices.push([x, y])
        }
      }
    }

    this.indices = indices;
  }

  get_vision_indices(position, velocity) {
    let out = [];

    for(let cell of this.indices) {
      out.push([position.x + cell[0], position.y + cell[1]])
    }

    return out
  }
}
