import {Vector} from "../helper/vector"
import {Helper} from "../helper/helper"
import {Movement} from "./movements"
import {Vision} from "./vision"
import {Host} from "./host"
import {Landscape} from "../models/landscape"

export class Sheep extends Host {
  protected mate_weight;
  protected general_weight;
  protected feed_weight;
  protected cautious_weight;

  protected tick_counter = 3;

  // css class, ts class, position, movement, vision, size, reproduction, speed, food
  constructor(protected position: Vector, protected desired_separation) {
    super("sheep", Sheep, position, {type:"flock", herding_range: 5, desired_separation: desired_separation}, "radius", "medium", "medium", "slow", "herbi");
  }

  // Every tick
  public simulate(landscape: Landscape, host_list) {
    if(!this.dead) {
      if(this.tick_counter < 3) {
        this.look(landscape, host_list);
        this.decide(landscape, host_list);
        this.tick_counter++;
      }
      else {
        this.update()
        this.tick_counter = 0;
      }
    }

    if(this.type == "carcase") {
      this.vanish();
    }
  }

  decide(landscape: Landscape, host_list) {
    this.mate_weight = 1;
    this.general_weight = 1;
    this.cautious_weight = 1;
    this.feed_weight = this.hungry();

    let rnd = Math.random();
    let carnivores = Array.from(this.neighbors).filter(([k, v]) => k.food_type == "meat")

    if(carnivores.length > 0) {
      this.flee(carnivores);
    }
    else if(this.feed_weight <= 1 && rnd < 0.2)
    {
      this.eat(landscape);
      this.stay()
    }
    else if(this.feed_weight > 1)
    {
      this.eat(landscape);
      if(rnd < 0.6) {
        this.stay()
      }
      else {
        this.move(landscape)
      }
    }
    else if(this.willingness >= this.mating_threshold) { // or mate
      if(this.mate(landscape.grid.length, host_list)) {
        this.stay()
      }
      else {
        this.mate_weight = this.mate_weight*2;
        this.move(landscape)
      }
    }
    else{ // or move
      this.move(landscape)
    }
  }

  move(landscape) {
    let general_movement: Vector;
    let feed_movement: Vector;
    let mate_movement: Vector;
    let cautious_movement: Vector;

    let total_movement: Vector;

    cautious_movement = this.avoid().unit()
    general_movement = this.movement.move(this, this.neighbors).unit()
    feed_movement = this.search_food().unit()
    mate_movement = this.find_partner().unit()

    cautious_movement.multiply(this.cautious_weight);
    general_movement.multiply(this.general_weight);
    feed_movement.multiply(this.feed_weight);
    mate_movement.multiply(this.mate_weight)

    total_movement = general_movement
      .add(cautious_movement)
      .add(feed_movement)
      .add(mate_movement)
      .limit(this.max_speed)

    this.move_host(landscape.grid.length, total_movement);
  }
}
