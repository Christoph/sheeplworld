import {autoinject} from 'aurelia-framework';
import {Sampling} from "../helper/sampling"
import * as d3 from "d3"

// This magic line removed the error messages for numeric
declare var numeric: any;
declare var lobos: any;

@autoinject
export class Genetic {
  p = 0.5;
  params = [];
  time_range = [];
  populations = [];
  rnd;
  sampling;

  constructor(private event_range, private population_range, private leftover_range, private generations, private n_samples) {
    for(let i = 0; i < this.generations; i++) {
      this.time_range.push(i);
    }

    this.sampling = new Sampling("sobol");
    this.rnd = d3.randomUniform();
  }

  compute_model() {
    let out = [];
    this.get_params(this.sampling.get_points(this.n_samples, 3))

    this.params.forEach( d => {
      this.populations.length = 0;
      out.push(this.simulation(d));
    })

    return out;
  }

  simulation(params) {
      // Reset p for a new simulation
      this.p = 0.5;
      let runs = [];
      let population_size = 0;

      for (let i = 1; i < this.generations+1; i++) {
        if(this.rnd()<params[1]) {
          population_size = Math.round(params[2])
        }
        else {
          population_size = params[0]
        }

        this.populations.push(population_size)

        runs.push({
          pop: this.effective_population(),
          p: this.next_generation(population_size)});
      }

      return runs;
  }

  next_generation(population_size) {
      let draws = 2 * population_size;
      let a1 = 0;
      let a2 = 0;

      for (let i = 0; i < draws; i = i + 1) {
          if (Math.random() <= this.p) {
              a1 = a1 + 1;
          }
          else {
              a2 = a2 + 1;
          }
      }

      this.p = a1/draws;

      return this.p;
  }

  // Harmonic mean of all populations
  effective_population() {
    let denominator = 0;

    for (var i = 0; i < this.populations.length; i = i + 1) {
        denominator = denominator + (1 / this.populations[i]);
    }

    return Math.round(this.populations.length / denominator);
  }

  get_params(points) {
    let pop_scale = d3.scaleLinear()
      .domain([0, 1])
      .range(this.population_range);

    let event_scale = d3.scaleLinear()
      .domain([0, 1])
      .range(this.event_range);

    let leftover_scale = d3.scaleLinear()
      .domain([0, 1])
      .range(this.leftover_range);

    points.forEach( d => {
        this.params.push([
            pop_scale(d[0]),
            event_scale(d[1]),
            leftover_scale(d[2])
        ])
    })
  }
}
