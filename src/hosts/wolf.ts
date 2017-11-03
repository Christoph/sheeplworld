import {Vector} from "../helper/vector"
import {Helper} from "../helper/helper"
import {Movement} from "./movements"
import {Vision} from "./vision"
import {Host} from "./host"

export class Wolf extends Host {
  // Attributes
  public current_speed = 0;

  private mate_weight = 1;
  private flock_weight = 1;
  private feed_weight = 1;

  // css class, ts class, size, position, vision radius, mating_threshold, max age, max speed, move type
  constructor(protected position: Vector, protected desired_separation) {
    super("wolf", Wolf, 2, position, 10, "cone", 20, 80, 3, {type:"pack", herding_range: 5, desired_separation: desired_separation});
  }

  // Basic decision function
  public simulate(grid, landscape_changes, host_list) {
    this.look(grid, host_list);
    this.decide(grid, landscape_changes, host_list);
    this.update_host();
  }

  update_host() {
    this.saturation--;
    this.willingness++;
    this.age++;

    if(this.saturation <= 0) {
      this.dead = true;
      this.type = "carcase"
    }

    if(this.age > this.maximum_age) {
      this.dead = true;
    }

    if(this.age > this.maximum_age*(1/3)) this.type = "sheep_adult"
    if(this.age > this.maximum_age*(2/3)) this.type = "sheep_old"
  }

  decide(grid, landscape_changes, host_list) {
    this.mate_weight = 1;
    this.flock_weight = 1;
    this.feed_weight = 1;

    let pack_movement: Vector;
    let feed_movement: Vector;
    let mate_movement: Vector;
    let total_movement: Vector;

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

    pack_movement = this.move(this.neighbors)
    feed_movement = this.feed(this.surroundings)
    mate_movement = this.find_partner()

    pack_movement.multiply(this.flock_weight);
    feed_movement.multiply(this.feed_weight);
    mate_movement.multiply(this.mate_weight)

    total_movement = pack_movement.add(feed_movement).add(mate_movement)

    this.move_host(grid, total_movement.divide(3));
  }

  move_host(grid, total_movement) {
    this.velocity.add(total_movement).limit(this.max_speed)

    this.next_position.add(this.velocity)

    this.current_speed = (this.position.distance(this.next_position) - this.max_speed) * -1

    // Prepare for discrete grid
    this.next_position.discretize().wrap(grid.length)
  }
}
