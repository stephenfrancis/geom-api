
import Point from "./Point";
import Vector from "./Vector";


export default class LineSegment {
  private from: Point;
  private to  : Point;


  constructor(from: Point, to: Point) {
    this.from = from;
    this.to   = to;
  }


  public clone(): LineSegment {
    return new LineSegment(this.from, this.to);
  }


  public equals(other_line: LineSegment): boolean {
    return (other_line.getFrom().equals(this.from)) && (other_line.getTo().equals(this.to));
  }


  public getFrom(): Point {
    return this.from;
  }


  public getGradientIntersection(): [number, number] {
    const out: [number, number] = [ null, null ];
    const x_diff: number = (this.to.getX() - this.from.getX());
    if (x_diff === 0) {
      out[0] = Number.POSITIVE_INFINITY;
      out[1] = Number.POSITIVE_INFINITY;
    } else {
      out[0] = (this.to.getY() - this.from.getY()) / x_diff;
      if (out[0] === 0) {
        out[1] = this.to.getY();
      } else {
        out[1] = this.to.getY() - (out[0] * this.to.getX());
      }
    }
    return out;
  }


  public getTo(): Point {
    return this.to;
  }


  public getVector(): Vector {
    return Vector.fromOriginTo(this.to.subtract(this.from));
  }


  public setFrom(point: Point): void {
    this.from = point;
  }


  public setTo(point: Point): void {
    this.to   = point;
  }


  public toString(): string {
    return `${this.from} - ${this.to}`;
  }
}
