import {autoinject} from 'aurelia-framework';
import {Sampling} from "../helper/sampling"
import * as d3 from "d3"
import * as _ from "lodash"

// This magic line removed the error messages for numeric
declare var lobos: any;

@autoinject
export class SpatialSir {
  params = [];
  grids = [];
  simulation_data = [];
  sampling;

  constructor(private grid_length, private alpha_range, private beta_range, private gamma_range) {
    this.sampling = new Sampling("sobol");
  }

  compute_model(n_samples, generations) {
    this.simulation_data.length = 0;
    this.grids.length = 0;

    this.get_params(this.sampling.get_points(n_samples, 3))

    this.params.forEach( d => {
        let grid = <any[]> [];

        this.init_simulation(grid)
        this.run_simulation(grid, d, generations)
      })
  }

  private get_params(points) {
    let alpha_scale = d3.scaleLinear()
      .domain([0, 1])
      .range(this.alpha_range);
    let beta_scale = d3.scaleLinear()
      .domain([0, 1])
      .range(this.beta_range);
    let gamma_scale = d3.scaleLinear()
      .domain([0, 1])
      .range(this.gamma_range);

    points.forEach( d => {
        this.params.push([
          alpha_scale(d[0]),
          beta_scale(d[1]),
          gamma_scale(d[2])
        ])
    })
  }

  get_random_int(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  init_simulation(grid) {
    // Fill Grid with initial data
    for(let i = 0; i < this.grid_length; i++) {
      let temp = []

      for (var j = 0; j < this.grid_length; j++) {
        temp[j] = "S";
      }

      grid.push(temp)
    }

    grid[this.get_random_int(0,this.grid_length-1)][this.get_random_int(0,this.grid_length-1)] = "I";
  }

  get_bounded_index(index) {
    let bounded_index = index;

    if(index < 0) {
      bounded_index = index + this.grid_length;
    }
    if(index >= this.grid_length) {
      bounded_index = index - this.grid_length;
    }

    return bounded_index
  }

  expose_neighbours(grid, temp_grid, i, j, params) {
    for(let n_i = i - 1;n_i <= i + 1; n_i++) {
      for(let n_j = j - 1;n_j <= j + 1; n_j++) {
        // Take care of possible selft infection
        if(n_i == i && n_j == j) {
          continue;
        }

        // Chance of an long distance interaction
        if(Math.random() <= params[0]) {
          let r_i = this.get_random_int(0, this.grid_length -1);
          let r_j = this.get_random_int(0, this.grid_length -1);

          // Take care of possible selft infection
          if(r_i == i && r_j == j) {
            continue;
          }
          this.infection(grid, temp_grid, this.get_bounded_index(r_i), this.get_bounded_index(r_j), params);
        }
        else {
          this.infection(grid, temp_grid, this.get_bounded_index(n_i), this.get_bounded_index(n_j), params);
        }
      }
    }
  }

  infection(grid, temp_grid, i, j, params) {
    if(grid[i][j] == "S") {
      if(Math.random() < params[1]) {
        temp_grid[i][j] = "I";
      }
    }
  }

  recovery(grid, temp_grid,i, j, params) {
    if(grid[i][j] == "I") {
      if(Math.random() < params[2]) {
        temp_grid[i][j] = "R";
      }
    }
  }

  run_simulation(grid, params, generations) {
    let simulation = [];
    let steps = []

    steps.push(_.cloneDeep(grid))

    for(let i = 0; i < generations - 1; i++) {
      simulation.push(this.run_iteration(grid, params))
      steps.push(_.cloneDeep(grid))
    }

    this.grids.push(steps)
    this.simulation_data.push(simulation)
  }

  run_iteration(grid, params) {
    // Duplicate to temp_grid
    let temp_grid = _.cloneDeep(grid);

    // Simulation
    for(let i = 0; i < this.grid_length; i++) {
      for(let j = 0; j < this.grid_length; j++) {
        // Infect surrounding hosts
        if(grid[i][j] == "I") {
          this.expose_neighbours(grid, temp_grid,i, j, params);
          this.recovery(grid, temp_grid,i, j, params);
        }
      }
    }

    // Update grid with values from temp_grid
    grid.length = 0;
    for(let i = 0; i < this.grid_length; i++) {
      let temp = []
      for(let j = 0; j < this.grid_length; j++) {
        temp[j] = temp_grid[i][j]
      }
      grid.push(temp)
    }

    let rec = _.filter(_.flatten(grid), function(o) { if (o == "R") return o }).length;
    let inf = _.filter(_.flatten(grid), function(o) { if (o == "I") return o }).length;
    let sus = _.filter(_.flatten(grid), function(o) { if (o == "S") return o }).length;

    return {rec: rec, inf: inf, sus: sus}
  }
}
