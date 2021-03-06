import {autoinject} from 'aurelia-framework';
import {Helper} from "../helper/helper"
import {Sheep} from "../hosts/sheep"
import {Vector} from "../helper/vector"
import {Landscape} from "./landscape"
import * as _ from "lodash"

@autoinject
export class SmallWorld {
  // Grid params
  noise;
  landscape;
  grid_length = 100;
  host_list = new Map();

  // Global params
  max_mating_distance = 1;
  simulation_iterations = 0;

  constructor(private grid) {
      this.landscape = new Landscape(this.grid_length)
  }

  init_simulation() {
    // Reset simulation variables
    this.grid.length = 0;
    this.simulation_iterations = 0;

    // Initialize landscape
    this.landscape.init()

    // Add initial data to grid
    for(let i = 0; i < this.grid_length; i++) {
      this.grid.push(_.clone(this.landscape.grid[i]))
    }
  }

  add_sheeps(amount, desired_separation) {
    let found = false;
    let positions = new Map();

    // Find grass area
    while(!found) {
      let x = Helper.get_random_int(0,this.grid_length-1);
      let y = Helper.get_random_int(0,this.grid_length-1)
      if(this.landscape.grid[x][y] == "grass_fresh") {
        found = true;
        positions.set(x+":"+y, [x, y])
      }
    }

    // Create all positions
    while(positions.size < amount) {
      let index = Math.floor(Math.random()*positions.size);
      let start = Array.from(positions.values())[index]

      let new_x = Helper.get_bounded_index(this.grid.length, start[0] + Helper.get_random_int(-1,1))
      let new_y = Helper.get_bounded_index(this.grid.length, start[1] + Helper.get_random_int(-1,1))

      if(!positions.has(new_x+":"+new_y) && this.landscape.grid[new_x][new_y] == "grass_fresh") {
        positions.set(new_x+":"+new_y, [new_x, new_y])
      }
    }

    // Add sheeps to host list
    positions.forEach((value, key) => {
      this.host_list.set(value[0] +","+value[1], new Sheep(new Vector(value[0], value[1]), desired_separation));
    })

    // Add hosts to the grid
    this.place_hosts()
  }

  place_hosts() {
    this.host_list.forEach((host, position) => {
        this.grid[Helper.get_bounded_index(this.grid.length, host.position.x)][Helper.get_bounded_index(this.grid.length, host.position.y)] = host.type;
    })
  }

  update_grid() {
    this.grid.length = 0;

    // Update landscape
    this.landscape.update();

    for(let i = 0; i < this.grid_length; i++) {
      // Add landscape changes
      this.grid.push(_.clone(this.landscape.grid[i]))
    }
  }

  run_iteration() {
    // Simulate all hosts
    this.host_list.forEach((host, position) => {
      host.simulate(this.landscape, this.host_list);
    })

    // Update grid
    this.update_grid();

    // Resolve host deciscions
    this.resolve()

    // Increase simulation counter
    this.simulation_iterations++;
    console.log(this.host_list.size)
  }

  resolve() {
    let current_state= new Set();
    let conflicts = new Map();
    let speeds = [];
    let hosts_at_position = [];
    let hosts = [];

    this.host_list.forEach((host, position) => {
      hosts.push(host)
    })

    // Sort hosts by speed (ascending)
    hosts.sort((a, b) => a.current_speed - b.current_speed);

    // Find conflicts and remove dead hosts
    for(var i = hosts.length -1; i >= 0 ; i--){
      // Remove dead hosts
      if(hosts[i].gone){
        this.host_list.delete(hosts[i].position.toString())
        hosts.splice(i, 1);
      }
      else {
        let host = hosts[i];
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
          if(temp.length > 1) {
            temp = Helper.shuffle(temp)
          }
          for(let i = 0; i < temp.length; i++) {
            host = temp[i];

            this.move_host_until_contact(current_state, key, host)
            this.remove_resolved(conflicts, key, value, host)
          }
        }
        else if(temp.length > 1 && current_state.has(key)) {
          temp = Helper.shuffle(temp)
          for(let i = 0; i < temp.length; i++) {
            let host = temp[i];

            this.move_host_until_contact(current_state, key, host)
            this.remove_resolved(conflicts, key, value, host)
          }
        }
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
    this.host_list.delete(host.position.toString())
    host.position = host.next_position.clone();
    this.host_list.set(host.position.toString(), host);

    // Draw
    this.grid[host.position.x][host.position.y] = host.type;
  }

  move_host_until_contact(current_state, key, host) {
    // Wait TODO:Move as far as possible
    this.host_list.delete(host.position.toString())
    host.next_position = host.position.clone();
    this.host_list.set(host.position.toString(), host);

    // Draw
    this.grid[host.position.x][host.position.y] = host.type;
  }
}
