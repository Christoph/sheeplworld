// This magic line removed the error messages for numeric
declare var lobos: any;

export class Sampling {
  constructor(private type) {
  }

  get_points(n_samples, dimension) {
    if(this.type == "sobol") {
      let seq = lobos.Sobol(dimension)

      return seq.take(n_samples)
    }
  }
}
