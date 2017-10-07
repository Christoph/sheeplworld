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

    // Initilize landscape
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

    // Add initial data to grid
    for(let i = 0; i < this.grid_length; i++) {
      this.grid.push(_.clone(this.landscape_grid[i]))
    }
  }

  add_sheeps() {
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

    // Add hosts
    this.place_hosts()
  }

  place_hosts() {
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
  }

  run_iteration() {
    // Create temporary grid for this iteration
    this.temp_landscape_grid = _.cloneDeep(this.landscape_grid);

    // Go through all hosts
    for(let host of this.host_list) {
      host.simulate(this.temp_landscape_grid, this.host_list);
    }

    // Update grid
    this.update_grid();

    // Resolve deciscions
    this.resolve()

    // Increase simulation counter
    this.simulation_iterations++;
  }

  resolve() {
    let current_state= new Set();
    let conflicts = new Map();
    let speeds = [];
    let hosts_at_position = []

    // Sort hosts by speed (ascending)
    this.host_list.sort((a, b) => a.current_speed - b.current_speed);

    // Find conflicts and remove dead hosts
    for(var i = this.host_list.length -1; i >= 0 ; i--){
      // Remove dead hosts
      if(this.host_list[i].dead){
        this.host_list.splice(i, 1);
      }
      else {
        let host = this.host_list[i];
        let position = host.position.toString();
        let next_position = host.next_position.toString();

        // Add speed to the speeds array
        if(!speeds.includes(host.current_speed)) speeds.push(host.current_speed)

        // Get current state
        current_state.add(position)

        // Get conflicts
        if(conflicts.has(next_position)) {
          hosts_at_position = conflicts.get(next_position);
          hosts_at_position.push(host)

          conflicts.set(next_position, hosts_at_position)
        }
        else {
          conflicts.set(next_position, [host])
        }
      }
    }

    // Resolve conflicts and update positions
    speeds.sort((a, b) => b - a).forEach(speed => {
      conflicts.forEach((value, key) => {
        let temp = value.filter( x => x.current_speed == speed)

        // Resolve cases
        if(temp.length == 1 && current_state.has(key)) {
          // No conflict but at target position is somewhere else
          this.move_host_until_contact(current_state, key, temp[0])
          this.remove_resolved(conflicts, key, value, temp[0])
        }
        else if(temp.length == 1 && !current_state.has(key)) {
          // Update current state
          this.move_host(current_state, key, temp[0])
          this.remove_resolved(conflicts, key, value, temp[0])
        }
        else if(temp.length > 1 && !current_state.has(key)) {
          // Get random host
          let index = Math.floor(Math.random()*temp.length);
          let host = temp.splice(index, 1)[0];

          // Move random host
          this.move_host(current_state, key, host)
          this.remove_resolved(conflicts, key, value, host)

          // Move remaining hosts
          // TODO: Random drawing
          for(let i = 0; i < temp.length; i++) {
            host = temp[i];

            this.move_host_until_contact(current_state, key, host)
            this.remove_resolved(conflicts, key, value, host)
          }
        }
        else if(temp.length > 1 && current_state.has(key)) {
          // TODO: Random drawing
          for(let i = 0; i < temp.length; i++) {
            let host = temp[i];

            this.move_host_until_contact(current_state, key, host)
            this.remove_resolved(conflicts, key, value, host)
          }
        }
        // else {
        //   console.log("ERROR")
        //   console.log(key, value, speed, temp)
        // }
      })
    })
  }

  remove_resolved(conflicts: Map<any, any>, key, value, host) {
    if(value.length > 1) {
      // Get index of resolved host
      let index = value.findIndex(x => x === host)

      // Remove resolved host
      value.splice(index, 1)

      if(value.length == 0) {
        conflicts.delete(key)
      }
    }
    else {
      // Remove position where all conflicts are resolved
      conflicts.delete(key)
    }

  }

  move_host(current_state, key, host) {
    // Update current state
    current_state.add(key)
    current_state.delete(host.position.toString())

    // Move
    host.position = host.next_position.clone();
    this.grid[host.position.x][host.position.y] = host.type;
  }

  move_host_until_contact(current_state, key, host) {
    // Wait TODO:Move as far as possible
    host.next_position = host.position.clone();
    this.grid[host.position.x][host.position.y] = host.type;
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
