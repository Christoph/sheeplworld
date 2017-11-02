import {Vector} from "../helper/vector"
import {Helper} from "../helper/helper"
import {Movement} from "./movements"
import {Vision} from "./vision"
import {Host} from "./host"

export class Sheep extends Host {
  // Attributes
  public current_speed = 0;

  private mate_weight = 1;
  private flock_weight = 1;
  private feed_weight = 1;

  constructor(protected position: Vector, protected desired_separation) {
    super("sheep", Sheep, position, 7, "radius", 20, 60, 1, {type:"flock", herding_range: 5, desired_separation: desired_separation});
  }

  // Basic decision function
  public simulate(grid, host_list) {
    this.look(grid, host_list);
    this.decide(grid, host_list);
    this.update_host();
  }

  decide(grid, host_list) {
    // let sheeps_around = [];
    // let predators_around = [];

    this.mate_weight = 1;
    this.flock_weight = 1;
    this.feed_weight = 1;

    let flock_movement: Vector;
    let feed_movement: Vector;
    let mate_movement: Vector;
    let total_movement: Vector;

    // Analyse surroundings
    // this.neighbors.forEach((value, key) => {
    //   if(key.type == "sheep" && value <= this.vision_radius) {
    //     sheeps_around.push(key);
    //   }
    //   if(key.type == "wolf" && value <= this.vision_radius) {
    //     predators_around.push(key)
    //   }
    // })

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
      if(this.mate(grid.length, host_list)) {
        this.mate_weight = this.mate_weight*0.5;
      }
      else {
        this.mate_weight = this.mate_weight*2;
      }
    }

    // if(predators_around.length > 0) {
    //   this.mate_weight = this.mate_weight*0.1;
    //   this.flock_weight = this.flock_weight*2;
    // }
    flock_movement = this.move(this.neighbors)
    feed_movement = this.feed(this.surroundings)
    mate_movement = this.find_partner()

    flock_movement.multiply(this.flock_weight);
    feed_movement.multiply(this.feed_weight);
    mate_movement.multiply(this.mate_weight)

    total_movement = flock_movement.add(feed_movement).add(mate_movement)

    this.move_host(grid.length, total_movement.divide(3));
  }

  move_host(grid_length, total_movement) {
    this.velocity.add(total_movement).limit(this.max_speed)

    this.next_position = this.position.clone().add(this.velocity)

    this.current_speed = (this.position.distance(this.next_position) - this.max_speed) * -1

    // Prepare for discrete grid
    this.next_position.discretize().wrap(grid_length)
  }
}
