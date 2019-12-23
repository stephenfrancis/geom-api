
import Point from "./Point";


export default class Area {
  private    top_left: Point;
  private bottom_right: Point;


  constructor(top_left: Point, bottom_right: Point) {
    if (top_left.getX() > bottom_right.getX()) {
      throw new Error(`top_left (${top_left.getX()}) is to the right of bottom_right (${bottom_right.getX()})`);
    }
    if (top_left.getY() > bottom_right.getY()) {
      throw new Error(`top_left (${top_left.getY()}) is below bottom_right (${bottom_right.getY()})`);
    }
    this.   top_left  =    top_left;
    this.bottom_right = bottom_right;
  }


  public clone(): Area {
    return new Area(this.top_left, this.bottom_right);
  }


  public contains(point: Point): boolean {
    return (this.top_left    .getX() <= point.getX())
      &&   (this.top_left    .getY() <= point.getY())
      &&   (this.bottom_right.getX() >= point.getX())
      &&   (this.bottom_right.getY() >= point.getY());
  }


  public getArea(): number {
    const attrs = this.getAttributes();
    return (attrs[2] * attrs[3]);
  }


  public getAttributes(): [number, number, number, number] {
    return [
      this.   top_left .getX(),
      this.   top_left .getY(),
      (this.bottom_right.getX() - this.top_left.getX()), // width
      (this.bottom_right.getY() - this.top_left.getY())  // height
    ];
  }


  public getBottomRight(): Point {
    return this.bottom_right;
  }


  public getPerimeter(): number {
    const attrs = this.getAttributes();
    return 2 * (attrs[2] + attrs[3]);
  }


  public getTopLeft(): Point {
    return this.top_left;
  }


  public isContainedBy(area: Area): boolean {
    return (this.top_left    .getX() >= area.getTopLeft()    .getX())
      &&   (this.top_left    .getY() >= area.getTopLeft()    .getY())
      &&   (this.bottom_right.getX() <= area.getBottomRight().getX())
      &&   (this.bottom_right.getY() <= area.getBottomRight().getY());
  }


  public overlaps(area: Area): boolean {
    return ((this.top_left    .getX() <= area.getBottomRight().getX())
        ||  (area.getTopLeft().getX() <= this.bottom_right    .getX()))
      &&   ((this.top_left    .getY() <= area.getBottomRight().getY())
        ||  (area.getTopLeft().getY() <= this.bottom_right    .getY()));
  }


  public toString(): string {
    return `${this.getTopLeft()} / ${this.getBottomRight()}`;
  }

}
