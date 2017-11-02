import {Vector} from "../helper/vector"
import {Helper} from "../helper/helper"
import {Movement} from "./movements"
import {Vision} from "./vision"

export class Host {
  // General variables
  protected next_position;
  protected velocity;
  protected vision;
  protected dead;
  protected age;
  protected saturation;
  protected willingness;
  protected movement;
  protected gone;

  protected neighbors = new Map();
  protected surroundings = [];

  constructor(
    protected type,
    protected host_type,
    protected size,
    protected position: Vector,
    protected vision_radius,
    protected vision_type,
    protected mating_threshold,
    protected maximum_age,
    protected max_speed,
    protected movement_type
  ) {
    // Initialize next position
    this.next_position = position.clone()
    // Initialize with random direction
    this.velocity = new Vector(Helper.get_random_float(-1, 1), Helper.get_random_float(-1, 1)).unit()

    // Get vision indices class
    this.vision = new Vision(this.vision_radius, this.vision_type)

    // Get initial variables
    this.movement = new Movement(this.movement_type.type);
    this.willingness = 0;
    this.saturation = 2;
    this.age = 1;
    this.dead = false;
    this.gone = false;
  }

  move(neighbors: Map<any, any>) {
    return this.movement.move(this, neighbors)
  }

  look(grid, host_list: Map<any, any>) {
    this.neighbors.clear();
    this.surroundings.length = 0;
    let vision = this.vision.get_vision_indices(this.position, this.velocity)

    // Observe the landscape
    for(let cell of vision) {
      let cell_x = +cell.split(",")[0]
      let cell_y = +cell.split(",")[1]

      if(host_list.has(cell)) {
        let host = host_list.get(cell)
        if(host !== this) this.neighbors.set(host, this.position.distance(host.position));
      }

      this.surroundings.push({
        d: this.position.distance(new Vector(cell_x, cell_y)),
        type: grid[Helper.get_bounded_index(grid.length, cell_x)][Helper.get_bounded_index(grid.length, cell_y)],
        position: new Vector(cell_x, cell_y)
      });
    }
  }

  find_partner() {
    let distance = this.vision_radius;
    let partner;
    let most_interesting;
    let arrousal = -1;
    let found = false;

    this.neighbors.forEach((d, n) => {
      if(n.willingness >= this.mating_threshold) {
        distance = d;
        partner = n;
        found = true;
      }
      else if(n.willingness > arrousal) {
        arrousal = n.willingness;
        most_interesting = n;
      }
    })

    if(found) {
      return this.movement.move_to(this, partner.position)
    }
    else if(this.neighbors.size > 0) {
      return this.movement.move_to(this, most_interesting.position)
    }
    else {
      return this.movement.move_to(this, new Vector(Helper.get_random_float(-1, 1), Helper.get_random_float(-1, 1)).unit())
    }
  }

  mate(grid_length, host_list) {
    this.neighbors.forEach((d, n) => {
      if(d < 2 && n.willingness >= this.mating_threshold) {
        let x = this.position.x
        let y = this.position.y

        let place_of_birth = x+","+y

        while(host_list.has(place_of_birth)) {
          x = Helper.get_bounded_index(grid_length, x + Helper.get_random_int(-1, 1))
          y = Helper.get_bounded_index(grid_length, y + Helper.get_random_int(-1, 1))

          place_of_birth = x+","+y
        }

        host_list.set(
          place_of_birth,
          new this.host_type(
            new Vector(x, y),
            Math.random() > 0.5 ? this.movement_type.desired_separation : n.desired_separation
          )
        )

        // Reset willingsness
        this.willingness = 10;
        n.willingness = 10;

        //Break out of loop
        return true;
      }
    })

    return false
  }

  eat(grid) {
    let type = grid[this.position.x][this.position.y];

    if(type == "grass_fresh") {
      this.saturation += 5;
      grid[this.position.x][this.position.y] = "grass"

      return true
    }
    else if(type == "grass") {
      this.saturation += 2;

      return true
    }

    return false
  }

  // Looking for fresh grass
  feed(surroundings) {
    let mean = new Vector(0, 0);
    let nearest_fresh_grass = surroundings.filter(cell => cell.type == "grass_fresh")
    let nearest_distance = Math.min(this.vision_radius, Math.min.apply(Math, nearest_fresh_grass.map(function(o){return o.d;})))
    let counter = 0;

    nearest_fresh_grass.forEach(n => {
      mean.add(n.position)
      counter++;
    })

    return this.movement.move_to(this, mean.divide(counter)).multiply(nearest_distance+1)
  }

  hungry() {
    let rnd = Math.random()
    if(this.saturation > 8) return false;
    if(this.saturation <= 8 && this.saturation > 4 && rnd < 0.2) return true;
    if(this.saturation <= 4 && this.saturation > 1 && rnd < 0.8) return true;
    if(this.saturation <= 1) return true;
  }
}
