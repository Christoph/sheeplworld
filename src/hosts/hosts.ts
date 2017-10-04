import {Vector} from "../helper/vector"

export class Sheep {
  // Attributes
  public type = "sheep";
  private vision = 7;
  private herding_range = 4;
  private desired_separation = 3;
  private max_speed = 1;
  private mating_threshold = 20;
  private maximum_age = 90;

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

  constructor(private position: Vector) {
    // Initialize next position
    this.next_position = new Vector(position.x, position.y)
    // Initialize with random direction
    this.velocity = new Vector(this.get_random_float(-1, 1), this.get_random_float(-1, 1)).unit()
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

        if(distance <= this.vision ) {
          this.neighbors.set(host, distance);
        }
      }
    }

    // Observe the landscape
    for(let x = this.position.x - this.vision;x <= this.position.x + this.vision; x++) {
      for(let y = this.position.y - this.vision;y <= this.position.y + this.vision; y++) {
        let distance = this.position.distance(new Vector(x, y));

        if(distance <= this.vision) {
          this.surroundings.push({
            d: distance,
            type: grid[this.get_bounded_index(grid.length, x)][this.get_bounded_index(grid.length, y)],
            position: new Vector(x, y)
          });
        }
      }
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
    if(predators_around.length > 0) {
      this.feed_weight = 0;
      this.mate_weight = 0;
    }
    else if(this.hungry()) {
      this.eat(grid);
    }
    else if(this.willingness >= this.mating_threshold) {
      this.mate_weight = 5;
      this.feed_weight = 3;
      this.mate(sheeps_around, host_list);
    }

    flock_movement = this.flock(sheeps_around)
    feed_movement = this.feed(this.surroundings)
    mate_movement = this.find_partner(sheeps_around)

    flock_movement.multiply(this.flock_weight);
    feed_movement.multiply(this.feed_weight);
    mate_movement.multiply(this.mate_weight)

    total_movement = flock_movement.add(feed_movement).add(mate_movement)

    // if(isNaN(total_movement.x)) {
    //   console.log(flock_movement)
    //   console.log(feed_movement)
    //   console.log(mate_movement)
    // }

    this.movement(grid, total_movement.divide(3));
  }

  eat(grid) {
    let type = grid[this.position.x][this.position.y];

    if(type == "grass_fresh") {
      this.saturation += 5;
      grid[this.position.x][this.position.y] = "grass"
    }
    else if(type == "grass") {
      this.saturation += 2;
    }
  }

  find_partner(neighbors) {
    let distance = this.vision;
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
        host_list.push(new Sheep(new Vector(this.position.x, this.position.y)))

        // Reset willingsness
        this.willingness = 0;
        n.willingness = 0;

        //Break out of loop
        break;
      }
    }
  }

  // Looking for fresh grass
  feed(surroundings) {
    let mean = new Vector(0, 0);
    let nearest_fresh_grass = surroundings.filter(cell => cell.type == "grass_fresh")
    let nearest_distance = Math.min.apply(Math, nearest_fresh_grass.map(function(o){return o.d;}))
    let counter = 0;

    nearest_fresh_grass.filter(cell => cell.d == nearest_distance || cell.d == nearest_distance+1).forEach(n => {
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

    // Prepare for discrete grid
    this.next_position.discretize().wrap(grid.length)
  }

  flock(neighbors) {
    let separation: Vector = this.separate(neighbors)
    let alignment: Vector = this.align(neighbors)
    let cohesion: Vector = this.cohere(neighbors)

    // if(isNaN(separation.add(alignment).add(cohesion).x)) {
    //   console.log(separation)
    //   console.log(alignment)
    //   console.log(cohesion)
    // }

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
        mean.add(this.position.clone().add(n.position).unit())
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
      return new Vector(0, 0)
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

export class Wolf {
  constructor(private x, private y) {
  }
}
