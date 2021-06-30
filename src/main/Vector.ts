import Point from "./Point";

export default class Vector {
  private magnitude: number;
  private bearing: number; // 0 = North

  constructor(magnitude: number, bearing: number) {
    this.magnitude = magnitude;
    this.bearing = bearing;
  }

  public add(other_vector: Vector): Vector {
    const ap: Point = this.toPoint();
    const bp: Point = other_vector.toPoint();
    return Vector.fromOriginTo(ap.add(bp));
  }

  public static between(a: Point, b: Point): Vector {
    const new_b: Point = b.clone();
    return Vector.fromOriginTo(new_b.subtract(a));
  }

  public clone(): Vector {
    return new Vector(this.magnitude, this.bearing);
  }

  public equals(other_vector: Vector): boolean {
    return (
      other_vector.getMagnitude() === this.magnitude &&
      other_vector.getBearing() === this.bearing
    );
  }

  public static fromOriginTo(point: Point): Vector {
    const x = point.getX();
    const y = point.getY();
    let bearing = (Math.atan2(x, -y) * 180) / Math.PI;
    if (bearing < 0) {
      bearing += 360;
    }
    const magnitude = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    return new Vector(magnitude, bearing);
  }

  public getBearing(): number {
    return this.bearing;
  }

  public getMagnitude(): number {
    return this.magnitude;
  }

  public subtract(other_vector: Vector): Vector {
    const ap: Point = this.toPoint();
    const bp: Point = other_vector.toPoint();
    return Vector.fromOriginTo(ap.subtract(bp));
  }

  public toPoint(): Point {
    let x: number = this.magnitude * Math.sin((this.bearing * Math.PI) / 180);
    let y: number = -(
      this.magnitude * Math.cos((this.bearing * Math.PI) / 180)
    );
    return new Point(x, y);
  }

  public toString(): string {
    return `[${this.magnitude.toFixed(3)}, ${this.bearing.toFixed(3)}°]`;
  }
}
