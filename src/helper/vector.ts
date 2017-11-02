export class Vector {
  constructor(public x, public y) {
  }

  add(v: Vector|number) {
    if (v instanceof Vector) {
      this.x = this.x + v.x
      this.y = this.y + v.y;

      return this
    }
    else {
      this.x = this.x + v
      this.y = this.y + v

      return this
    }
  }

  subtract(v: Vector|number) {
    if (v instanceof Vector) {
      this.x = this.x - v.x
      this.y = this.y - v.y

      return this
    }
    else {
      this.x = this.x - v
      this.y = this.y - v

      return this
    }
  }

  multiply(v: Vector|number) {
    if (v instanceof Vector) {
      this.x = this.x * v.x
      this.y = this.y * v.y

      return this
    }
    else {
      this.x = this.x * v
      this.y = this.y * v

      return this
    }
  }

  divide(v: Vector|number) {
    if (v instanceof Vector) {
      this.x = this.x / v.x
      this.y = this.y / v.y

      return this
    }
    else {
      this.x = this.x / v
      this.y = this.y / v

      return this
    }
  }

  equals(v: Vector) {
    return this.x == v.x && this.y == v.y;
  }

  dot(v: Vector) {
    return this.x * v.x + this.y * v.y;
  }

  distance(vector: Vector) {
    return Math.round(Math.sqrt((this.x - vector.x)**2+(this.y - vector.y)**2));
  }

  limit(max_length) {
    if(this.length() > max_length) {
      this.x = (max_length/this.length())*this.x;
      this.y = (max_length/this.length())*this.y;
    }

    return this
  }

  length() {
    return Math.sqrt(this.x**2+this.y**2);
  }

  unit() {
    let length = this.length();
    this.x = this.x/length
    this.y = this.y/length

    return this
  }

  clone() {
    return new Vector(this.x, this.y)
  }

  discretize() {
    this.x = Math.round(this.x)
    this.y = Math.round(this.y)

    return this
  }

  wrap(grid_length) {
    this.x = this.get_bounded_index(grid_length, this.x)
    this.y = this.get_bounded_index(grid_length, this.y)

    return this
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

  toString() {
    return this.x+","+this.y
  }
}
