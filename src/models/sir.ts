import {autoinject} from 'aurelia-framework';
import {Sampling} from "../helper/sampling"
import * as d3 from "d3"

// This magic line removed the error messages for numeric
declare var numeric: any;
declare var lobos: any;

@autoinject
export class SIR {
  private ND;
  private R0;
  private INPUT;
  public time_range = <any[]> [];
  public params = <any[]> [];
  private sampling;

  // Params for the computations
  private rho;
  private v;
  private mu;
  private beta;
  private gamma;

  constructor(private rho_range, private v_range,
    private mu_range, private beta_range, private gamma_range,
    private NY, private S0, private I0) {
      // Update variables
      this.ND = this.NY*365
      this.R0 = 1 - this.S0 - this.I0
      this.INPUT = [+this.S0, +this.I0, +this.R0]

      for (let i = 0; i < this.ND; i++) {
          this.time_range.push(i)
      }

      this.sampling = new Sampling("sobol");
  }

  compute_model(n_samples) {
    let out = <any[]> [];
    this.get_params(this.sampling.get_points(n_samples, 5))

    this.params.forEach( d => {
        this.rho = d[0];
        this.v = d[1];
        this.mu = d[2];
        this.beta = d[3];
        this.gamma = d[4];

        let sol = numeric.dopri(0, this.ND, this.INPUT, this.SIR_model, 1e-6, 5000);

        out.push(sol.at(this.time_range))
      })

      return out;
  }

  private SIR_model = (t, INP) => {
    let Y = [0, 0 ,0]
    let V = INP

      Y[0] = this.v - this.beta * V[0] * V[1] / V.reduce((a,b) => a + b, 0) - this.mu * V[0]
      Y[1] = this.beta * V[0] * V[1] / V.reduce((a,b) => a + b, 0) - (this.gamma + this.mu) * V[1]/(1-this.rho)
      Y[2] = this.gamma * V[1] - this.mu * V[2]

    return Y
  }

  private get_params(points) {
    let rho_scale = d3.scaleLinear()
      .domain([0, 1])
      .range(this.rho_range);
    let v_scale = d3.scaleLinear()
      .domain([0, 1])
      .range(this.v_range);
    let mu_scale = d3.scaleLinear()
      .domain([0, 1])
      .range(this.mu_range);
    let beta_scale = d3.scaleLinear()
      .domain([0, 1])
      .range(this.beta_range);
    let gamma_scale = d3.scaleLinear()
      .domain([0, 1])
      .range(this.gamma_range);

    points.forEach( d => {
        this.params.push([
            Math.round(rho_scale(d[0]))/100,
            1/(Math.round(v_scale(d[1]))*365),
            1/(Math.round(mu_scale(d[2]))*365),
            beta_scale(d[3]),
            1/Math.round(gamma_scale(d[4]))
        ])
    })
  }
}
