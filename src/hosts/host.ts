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

  protected neighbors = new Map();
  protected surroundings = [];

  constructor(
    protected type,
    protected host_type,
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
    this.willingness = 10;
    this.saturation = 2;
    this.age = 1;
    this .dead = false;
  }

  update_host(host_list) {
    this.saturation--;
    this.willingness++;
    this.age++;

    if(this.saturation <= 0) {
      this.dead = true;
    }

    if(this.age > this.maximum_age) {
      this.dead = true;
    }
  }

  move(neighbors: Map<any, any>) {
    return this.movement.move(this, neighbors)
  }

  look(grid, host_list) {
    this.neighbors.clear();
    this.surroundings.length = 0;

    // Check for other hosts
    // TODO: Check only surroundings?
    for(let host of host_list) {
      if(host !== this) {
        let distance = this.position.distance(host.position);

        if(distance <= this.vision_radius ) {
          this.neighbors.set(host, distance);
        }
      }
    }

    // Observe the landscape
    for(let cell of this.vision.get_vision_indices(this.position, this.velocity)) {
      this.surroundings.push({
        d: this.position.distance(new Vector(cell[0], cell[1])),
        type: grid[Helper.get_bounded_index(grid.length, cell[0])][Helper.get_bounded_index(grid.length, cell[1])],
        position: new Vector(cell[0], cell[1])
      });
    }
  }

  find_partner() {
    let distance = this.vision_radius;
    let partner;
    let most_interesting;
    let arrousal = 0;
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
    else {
      return this.movement.move_to(this, most_interesting.position)
    }
  }

  mate(host_list) {
    this.neighbors.forEach((d, n) => {
      if(d < 2 && n.willingness >= this.mating_threshold) {
        host_list.push(new this.host_type(
          new Vector(this.position.x, this.position.y),
          Math.random() > 0.5 ? this.movement_type.desired_separation : n.desired_separation
        ))

        // Reset willingsness
        this.willingness = 0;
        n.willingness = 0;

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
