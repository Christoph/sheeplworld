import {Vector} from "../helper/vector"
import * as _ from "lodash"

declare var Noise: any;

export class Landscape {
  noise;
  public grid = [];
  protected temp_grid = [];
  protected changes = new Map();

  constructor(private size) {
      this.noise = new Noise()
  }

  init() {
    // Create noisemap for the landscape
    let noise_map = [];
    this.noise.seed(Math.random());

    for(let i = 0; i < this.size; i++) {
      let temp = []
      for(let j = 0; j < this.size; j++) {
        temp[j] = this.noise.simplex2(i/50, j/50)
      }
      noise_map.push(temp)
    }

    // Initilize landscape
    for(let i = 0; i < this.size; i++) {
      let temp_landscape = []

      for(let j = 0; j < this.size; j++) {
        // Landscape
        let value = "grass"
        if(noise_map[i][j] <= 0) {
          value = "grass_fresh";
        }
        else {
          value = "dirt"
        }
        temp_landscape[j] = value;
      }
      this.grid.push(temp_landscape)
    }

    this.temp_grid = _.cloneDeep(this.grid)
  }

  update() {
    this.regrow();

    this.grid = _.cloneDeep(this.temp_grid)
  }

  regrow() {
    this.changes.forEach( (cell, key) => {
      if(cell.timer >= 50) {
        this.temp_grid[cell.position.x][cell.position.y] = cell.old
        this.changes.delete(cell.position.toString());
      }
      else {
        cell.timer++;
      }
    })
  }

  eat(position: Vector) {
    let type = this.temp_grid[position.x][position.y];
    let energy = 0;

    if(type == "grass_fresh") {
      energy = 4;
      this.temp_grid[position.x][position.y] = "grass"

      this.changes.set(
        position.toString(),
        {
        position: position,
        old: "grass_fresh",
        new: "grass",
        timer: 0
      })
    }
    else if(type == "grass") {
      energy = 1;

      if(this.changes.has(position.toString())) {
        this.changes.get(position.toString()).timer = 0;
      }
    }

    return energy
  }
}
