

export default class Point {
  private x: number;
  private y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  // point functioning as a cartesian vector...
  public add(other_point: Point): Point {
    return new Point(this.x + other_point.getX(), this.y + other_point.getY());
  }


  public clone(): Point {
    return new Point(this.x, this.y);
  }


  public equals(other_point: Point): boolean {
    return (other_point.getX() === this.x) && (other_point.getY() === this.y);
  }


  public getCoords(): [number, number] {
    return [ this.x, this.y ];
  }


  public getX(): number {
    return this.x;
  }


  public getY(): number {
    return this.y;
  }


  // point functioning as a cartesian vector...
  public subtract(other_point: Point): Point {
    return new Point(this.x - other_point.getX(), this.y - other_point.getY());
  }


  public toString(): string {
    return `[${this.x}, ${this.y}]`;
  }

}
