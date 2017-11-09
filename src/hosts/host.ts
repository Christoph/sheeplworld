import {Vector} from "../helper/vector"
import {Helper} from "../helper/helper"
import {Movement} from "./movements"
import {Vision} from "./vision"
import {Landscape} from "../models/landscape"

export class Host {
  // General variables
  protected next_position;
  protected velocity;

  protected vision;
  protected movement;
  protected food_type;
  protected direction;
  protected inertia;

  protected dead = false;
  protected age = 1;
  protected saturation = 2;
  protected willingness = 0;
  protected gone = false;
  protected current_speed = 0;

  protected vision_radius = 7;
  protected maximum_age = 60;
  protected required_food = 4;
  protected mating_threshold = 6;
  protected max_speed = 2;
  protected mass = 2;

  protected neighbors = new Map();
  protected surroundings = [];

  constructor(
    protected type,
    protected host_type,
    protected position: Vector,
    protected movement_type,
    vision_type,
    size,
    reproduction,
    max_speed,
    food_type
  ) {
    // Initialize constant variables
    this.set_speed(max_speed)
    this.set_reproduction(reproduction);
    this.set_food(food_type)
    this.set_size(size);

    this.saturation = this.required_food * 2;

    this.vision = new Vision(this.vision_radius, vision_type)
    this.movement = new Movement(movement_type.type);
    this.movement_type.herding_range = this.vision_radius

    // Initialize changing variables
    this.next_position = position.clone()
    this.velocity = new Vector(Helper.get_random_float(-1, 1), Helper.get_random_float(-1, 1)).unit()
  }

  set_reproduction(reproduction) {
    if(reproduction == "fast") {
      this.maximum_age = 30;
      this.mating_threshold = 3;
      this.required_food++;
    }
    else if(reproduction == "slow") {
      this.maximum_age = 90;
      this.mating_threshold = 9;
      this.required_food--;
    }
  }

  set_speed(speed) {
    if(speed == "fast") {
      this.max_speed++;
      this.required_food++;
    }
    else if(speed == "slow") {
      this.max_speed--;
      this.required_food--;
    }
  }

  set_size(size) {
    if(size == "small") {
      this.mass--;
      this.inertia = 1;
      this.required_food--;
      this.vision_radius--;
    }
    else if(size == "medium") {
      this.inertia = 0.66;
    }
    else if(size == "big") {
      this.mass++;
      this.inertia = 0.33;
      this.required_food++;
      this.vision_radius++;
    }
  }

  set_food(reproduction) {
    if(reproduction == "carni") {
      this.food_type = "meat"
    }
    else if(reproduction == "omni") {
      this.food_type = "all"
      this.required_food++;
    }
    else if(reproduction == "herbi") {
      this.food_type = "plant"
    }
  }

  update() {
    // Living
    this.saturation = this.saturation - this.required_food;
    this.willingness++;
    this.age++;

    // Aging
    if(this.age > this.maximum_age*(1/3)) {
      this.type = "sheep_adult"
      this.inertia = Math.max(this.inertia - 0.33, 0.33)
    }
    if(this.age > this.maximum_age*(2/3)) {
      this.type = "sheep_old"
      this.max_speed = Math.max(this.max_speed - 1, 1)
      this.vision_radius--;
      this.required_food = Math.max(this.required_food - 1, 1)
      this.mating_threshold = this.mating_threshold * 1.25
    }

    // Dying
    if(this.saturation <= 0 || this.age > this.maximum_age) {
      this.dead = true;
      this.type = "carcase"
    }
  }

  look(landscape: Landscape, host_list: Map<any, any>) {
    this.neighbors.clear();
    this.surroundings.length = 0;
    let vision = this.vision.get_vision_indices(this.position, this.velocity)

    // Observe the landscape
    for(let cell of vision) {
      let cell_x = +cell.split(",")[0]
      let cell_y = +cell.split(",")[1]

      if(host_list.has(cell)) {
        let host = host_list.get(cell)
        if(host !== this && !host.dead) this.neighbors.set(host, this.position.distance(host.position));
      }

      this.surroundings.push({
        d: this.position.distance(new Vector(cell_x, cell_y)),
        type: landscape.grid[Helper.get_bounded_index(landscape.grid.length, cell_x)][Helper.get_bounded_index(landscape.grid.length, cell_y)],
        position: new Vector(cell_x, cell_y)
      });
    }
  }

  move_host(grid_length, total_movement) {
    this.velocity.add(total_movement).limit(this.max_speed)

    this.next_position = this.position.clone().add(this.velocity)

    this.current_speed = (this.position.distance(this.next_position) - this.max_speed) * -1

    // Prepare for discrete grid
    this.next_position.discretize().wrap(grid_length)
  }

  stay() {
    this.next_position = this.position.clone()
  }

  flee(carnivores) {
    let mean = new Vector(0, 0);

    carnivores.forEach(n => {
      mean.add(this.position.clone().subtract(n.position))
    })

    mean.multiply(-1)

    return mean
  }

  avoid() {
    let mean = new Vector(0, 0);
    let suspicious = Array.from(this.neighbors).filter(([k, v]) => k.dead == true)

    suspicious.forEach(n => {
      mean.add(this.position.clone().subtract(n[0].position))
    })

    mean.multiply(-1)

    return mean
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
        this.willingness = 0;
        n.willingness = 0;

        //Break out of loop
        return true;
      }
    })

    return false
  }

  eat(landscape) {
    if(this.food_type == "plant") {
      let energy = landscape.eat(this.position)

      this.saturation += energy;
    }
  }

  // Looking for fresh grass
  search_food() {
    if(this.food_type == "plant") {
      let nearest = new Vector(0, 0);
      let mean_fresh = new Vector(0, 0);
      let mean_grass = new Vector(0, 0);

      let fresh_grass = this.surroundings.filter(cell => cell.type == "grass_fresh")
      let nearest_distance = Math.min(this.vision_radius, Math.min.apply(Math, fresh_grass.map(function(o){return o.d;})))
      let nearest_fresh_grass = fresh_grass.filter(cell => cell.d == nearest_distance)
      let nearest_grass = this.surroundings.filter(cell => cell.type == "grass")

      // Stay if you are on a good spot
      if(nearest_distance == 0) {
        return nearest
      }

      nearest_fresh_grass.forEach(n => {
        nearest.add(n.position.clone().subtract(this.position))
      })
      nearest.unit().multiply(5)

      fresh_grass.forEach(n => {
        mean_fresh.add(n.position.clone().subtract(this.position))
      })
      mean_fresh.unit().multiply(3)

      nearest_grass.forEach(n => {
        mean_grass.add(n.position.clone().subtract(this.position))
      })
      mean_grass.unit()

      return  mean_fresh.add(mean_grass).add(nearest)
    }
  }

  hungry() {
    if(this.saturation > (this.required_food * 6)) return 0.5;
    if(this.saturation <= (this.required_food * 6) && this.saturation > (this.required_food * 3)) return 1;
    if(this.saturation <= (this.required_food * 3) && this.saturation > this.required_food) return 1.5;
    if(this.saturation <= this.required_food) return 2;
    return 0.75;
  }

  vanish() {
    this.mass--;

    if(this.mass < 0) {
      this.gone = true;
    }
  }
}
