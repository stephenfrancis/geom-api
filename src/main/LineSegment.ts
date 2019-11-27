
import Point from "./Point";


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


  public getTo(): Point {
    return this.to;
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
