import {autoinject} from 'aurelia-framework';
import {Sampling} from "../helper/sampling"
import {Sheep} from "../hosts/sheep"
import {Vector} from "../helper/vector"
import * as d3 from "d3"
import * as _ from "lodash"

// This magic line removed the error messages for numeric
declare var lobos: any;
declare var Noise: any;

@autoinject
export class SmallWorld {
  // Grid params
  noise;
  grid_length = 100;
  landscape_grid = [];
  temp_landscape_grid = [];
  host_list = [];

  // Global params
  max_mating_distance = 1;
  simulation_iterations = 0;

  constructor(private grid) {
      this.noise = new Noise()
  }

  get_random_int(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  init_simulation() {
    // Reset simulation variables
    this.grid.length = 0;
    this.simulation_iterations = 0;

    // Create noisemap for the landscape
    let noise_map = [];
    this.noise.seed(Math.random());

    for(let i = 0; i < this.grid_length; i++) {
      let temp = []
      for(let j = 0; j < this.grid_length; j++) {
        temp[j] = this.noise.simplex2(i/50, j/50)
      }
      noise_map.push(temp)
    }

    // Initilize landscape and host grids
    for(let i = 0; i < this.grid_length; i++) {
      let temp_landscape = []

      for(let j = 0; j < this.grid_length; j++) {
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
      this.landscape_grid.push(temp_landscape)
    }

    // Add initial hosts
    let found = false;
    // Find grass area
    while(!found) {
      let x = this.get_random_int(0,this.grid_length-1);
      let y = this.get_random_int(0,this.grid_length-1)
      if(this.landscape_grid[x][y] == "grass_fresh") {
        found = true;

        this.host_list.push(new Sheep(new Vector(x, y)));
        this.host_list.push(new Sheep(new Vector(x-1, y)));
        this.host_list.push(new Sheep(new Vector(x+1, y)));
        this.host_list.push(new Sheep(new Vector(x, y+1)));
        this.host_list.push(new Sheep(new Vector(x, y-1)));
        this.host_list.push(new Sheep(new Vector(x+1, y+1)));
        this.host_list.push(new Sheep(new Vector(x+2, y+1)));
        this.host_list.push(new Sheep(new Vector(x+2, y)));
        this.host_list.push(new Sheep(new Vector(x-1, y-1)));
      }
    }

    // Add initial data to grid
    for(let i = 0; i < this.grid_length; i++) {
      this.grid.push(_.clone(this.landscape_grid[i]))
    }

    // Add hosts
    for (var host of this.host_list) {
      this.grid[this.get_bounded_index(this.grid.length, host.position.x)][this.get_bounded_index(this.grid.length, host.position.y)] = host.type;
    }
  }

  update_grid() {
    this.landscape_grid.length = 0;
    this.grid.length = 0;

    for(let i = 0; i < this.grid_length; i++) {
      // Copy temp to working grids
      this.landscape_grid.push(_.clone(this.temp_landscape_grid[i]))

      // Add landscape changes
      this.grid.push(_.clone(this.landscape_grid[i]))
    }

    // Add host changes
    for(var i = this.host_list.length -1; i >= 0 ; i--){
      // Remove dead hosts
      if(this.host_list[i].dead){
          this.host_list.splice(i, 1);
      }
      else {
        // Update host position
        this.host_list[i].position = _.cloneDeep(this.host_list[i].next_position);
        this.grid[this.host_list[i].position.x][this.host_list[i].position.y] = this.host_list[i].type;
      }
    }
  }

  run_iteration() {
    // Create temporary grid for this iteration
    this.temp_landscape_grid = _.cloneDeep(this.landscape_grid);

    // Go through all hosts
    for(let host of this.host_list) {
      host.simulate(this.temp_landscape_grid, this.host_list);
    }

    console.log(this.host_list.length)
    // Update grid
    this.update_grid();

    // Increase simulation counter
    this.simulation_iterations++;
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
