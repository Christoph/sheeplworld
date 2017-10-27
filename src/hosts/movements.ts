import {Vector} from "../helper/vector"

export class Movement {
  constructor(private type) {

  }

  move(host, neighbors: Map<any, any>) {
    if(this.type == "flock") {
      return this.flock(host, neighbors)
    }
    else {
      return "Unknown Type"
    }
  }

  move_to(host, target : Vector) {
    let target_position = target.clone().subtract(host.position);
    let distance = target_position.length();

    if(distance > 0) {
      return target_position.unit().subtract(host.velocity)
    }
    else {
      return host.velocity.clone()
    }
  }

  private flock(host, neighbors: Map<any, any>) {
    let separation: Vector = this.separate(host, neighbors).multiply(4)
    let alignment: Vector = this.align(neighbors).multiply(2)
    let cohesion: Vector = this.cohere(host, neighbors)

    return separation.add(alignment).add(cohesion)
  }

  private cohere(host, neighbors: Map<any, any>) {
    let sum = new Vector(0, 0);

    neighbors.forEach((d, n) => {
      sum.add(n.position)
    })

    return this.move_to(host, sum.divide(neighbors.size))
  }

  private align(neighbors: Map<any, any>) {
    let mean = new Vector(0, 0)

    neighbors.forEach((d, n) => {
      mean.add(n.velocity)
    })

    if(mean.length() > 0) {
      mean.divide(neighbors.size)
      mean.limit(5)
    }

    return mean
  }

  private separate(host, neighbors: Map<any, any>) {
    let mean = new Vector(0, 0)
    let counter = 0;

    neighbors.forEach((d, n) => {
      let distance = n.position.distance(host.position)

      if(distance > 0  && distance < host.desired_separation) {
        mean.add(host.position.clone().subtract(n.position).unit())
        counter++;
      }
      if(distance == 0) {
        // mean.add(host.position.clone().add(n.position).unit())
        mean.add(n.velocity.multiply(-1).unit())
        counter++;
      }
    })

    if(mean.length() > 0) {
      mean.divide(counter)
    }

    return mean
  }
}
