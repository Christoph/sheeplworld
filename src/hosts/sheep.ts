import {Vector} from "../helper/vector"
import {Vision} from "./vision"

export class Sheep {
  // Attributes
  // Constant
  public type = "sheep";

  private vision;
  private vision_radius;
  private herding_range;
  private mating_threshold;
  private maximum_age;
  private max_speed;

  // Changing
  public current_speed = 0;
  private dead = false;
  private age = 1;
  private saturation = 2;
  private willingness = 10;
  private neighbors = new Map();
  private surroundings = [];
  private velocity;
  private next_position;

  private mate_weight = 1;
  private flock_weight = 1;
  private feed_weight = 1;

  constructor(private position: Vector, private desired_separation) {
    // Initialize next position
    this.next_position = position.clone()
    // Initialize with random direction
    this.velocity = new Vector(this.get_random_float(-1, 1), this.get_random_float(-1, 1)).unit()

    // Set initial parameters
    // this.desired_separation = 2;
    this.vision_radius = 7;
    this.herding_range = 5;
    this.mating_threshold = 20;
    this.maximum_age = 60;
    this.max_speed = 1;

    // Get vision indices class
    this.vision = new Vision(this.vision_radius)
  }

  // Generate random numbers within range
  get_random_int(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  get_random_float(min, max) {
    return Math.random() * (max - min + 1) + min;
  }

  // Basic decision function
  public simulate(grid, host_list) {
    this.look(grid, host_list);
    this.decide(grid, host_list);
    this.update_host(host_list);
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
    for(let cell of this.vision.get_vision_indices(this.position)) {
      this.surroundings.push({
        d: this.position.distance(new Vector(cell[0], cell[1])),
        type: grid[this.get_bounded_index(grid.length, cell[0])][this.get_bounded_index(grid.length, cell[1])],
        position: new Vector(cell[0], cell[1])
      });
    }
  }

  decide(grid, host_list) {
    let sheeps_around = [];
    let predators_around = [];

    this.mate_weight = 1;
    this.flock_weight = 1;
    this.feed_weight = 1;

    let flock_movement: Vector;
    let feed_movement: Vector;
    let mate_movement: Vector;
    let total_movement: Vector;

    // Analyse surroundings
    this.neighbors.forEach((value, key) => {
      if(key.type == "sheep" && value <= this.herding_range) {
        sheeps_around.push(key);
      }
      if(key.type == "wolf" && value <= this.herding_range) {
        predators_around.push(key)
      }
    })

    // decide based on importance
    if(this.hungry()) {
      if(this.eat(grid)) {
        this.feed_weight = this.feed_weight*0.5;
      }
      else {
        this.feed_weight = this.feed_weight*2;
      }
    }

    if(this.willingness >= this.mating_threshold) {
      if(this.mate(sheeps_around, host_list)) {
        this.mate_weight = this.mate_weight*0.5;
      }
      else {
        this.mate_weight = this.mate_weight*2;
      }
    }

    if(predators_around.length > 0) {
      this.mate_weight = this.mate_weight*0.1;
      this.flock_weight = this.flock_weight*2;
    }

    flock_movement = this.flock(sheeps_around)
    feed_movement = this.feed(this.surroundings)
    mate_movement = this.find_partner(sheeps_around)

    flock_movement.multiply(this.flock_weight);
    feed_movement.multiply(this.feed_weight);
    mate_movement.multiply(this.mate_weight)

    total_movement = flock_movement.add(feed_movement).add(mate_movement)

    this.movement(grid, total_movement.divide(3));
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

  find_partner(neighbors) {
    let distance = this.vision_radius;
    let available_partners = neighbors.filter(cell => cell.saturation > 5);
    let partner;

    available_partners.forEach(n => {
      if(this.position.distance(n.position) < distance) {
        distance = this.position.distance(n.position);
        partner = n;
      }
    })

    if(partner instanceof Sheep) {
      return this.move_to(partner.position)
    }
    else {
      return this.move_to(this.position)
    }
  }

  mate(neighbors, host_list) {
    for(let i = 0; i < neighbors.length; i++) {
      let n = neighbors[i]
      if(this.position.distance(n.position) < 2 && n.willingness >= this.mating_threshold) {
        // Create new sheep
        host_list.push(new Sheep(
          new Vector(this.position.x, this.position.y),
          Math.random() > 0.5 ? this.desired_separation : n.desired_separation
        ))

        // Reset willingsness
        this.willingness = 0;
        n.willingness = 0;

        //Break out of loop
        return true;
      }
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

    return this.move_to(mean.divide(counter)).multiply(nearest_distance+1)
  }

  hungry() {
    let rnd = Math.random()
    if(this.saturation > 8) return false;
    if(this.saturation <= 8 && this.saturation > 4 && rnd < 0.2) return true;
    if(this.saturation <= 4 && this.saturation > 1 && rnd < 0.8) return true;
    if(this.saturation <= 1) return true;
  }

  movement(grid, total_movement) {
    this.velocity.add(total_movement).limit(this.max_speed)

    this.next_position.add(this.velocity)

    this.current_speed = (this.position.distance(this.next_position) - this.max_speed) * -1

    // Prepare for discrete grid
    this.next_position.discretize().wrap(grid.length)
  }

  flock(neighbors) {
    let separation: Vector = this.separate(neighbors).multiply(4)
    let alignment: Vector = this.align(neighbors).multiply(2)
    let cohesion: Vector = this.cohere(neighbors)

    return separation.add(alignment).add(cohesion)
  }

  cohere(neighbors) {
    let sum = new Vector(0, 0);

    neighbors.forEach(n => {
      sum.add(n.position)
    })

    return this.move_to(sum.divide(neighbors.length))
  }

  align(neighbors) {
    let mean = new Vector(0, 0)


    neighbors.forEach(n => {
      mean.add(n.velocity)
    })

    if(mean.length() > 0) {
      mean.divide(neighbors.length)
      mean.limit(5)
    }

    return mean
  }

  separate(neighbors) {
    let mean = new Vector(0, 0)
    let counter = 0;

    neighbors.forEach(n => {
      let distance = n.position.distance(this.position)

      if(distance > 0  && distance < this.desired_separation) {
        mean.add(this.position.clone().subtract(n.position).unit())
        counter++;
      }
      if(distance == 0) {
        // mean.add(this.position.clone().add(n.position).unit())
        mean.add(n.velocity.multiply(-1).unit())
        counter++;
      }
    })

    if(mean.length() > 0) {
      mean.divide(counter)
    }

    return mean
  }

  move_to(target : Vector) {
    let target_position = target.clone().subtract(this.position);
    let distance = target_position.length();

    if(distance > 0) {
      return target_position.unit().subtract(this.velocity)
    }
    else {
      return this.velocity.clone()
    }
  }

  get_bounded_index(grid_length, index) {
    let bounded_index = index;

    if(index < 0) {
      bounded_index = index + grid_length;
    }
    if(index >= grid_length) {
      bounded_index = index - grid_length;
    }

    return bounded_index
  }
}
