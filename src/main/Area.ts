import Point from "./Point";

export default class Area {
  private top_left: Point;
  private bottom_right: Point;

  constructor(top_left: Point, bottom_right: Point) {
    if (top_left.getX() > bottom_right.getX()) {
      throw new Error(
        `top_left (${top_left.getX()}) is to the right of bottom_right (${bottom_right.getX()})`
      );
    }
    if (top_left.getY() > bottom_right.getY()) {
      throw new Error(
        `top_left (${top_left.getY()}) is below bottom_right (${bottom_right.getY()})`
      );
    }
    this.top_left = top_left;
    this.bottom_right = bottom_right;
  }

  public clone(): Area {
    return new Area(this.top_left, this.bottom_right);
  }

  public contains(point: Point): boolean {
    return (
      this.getMinX() <= point.getX() &&
      this.getMinY() <= point.getY() &&
      this.getMaxX() >= point.getX() &&
      this.getMaxY() >= point.getY()
    );
  }

  public getArea(): number {
    const attrs = this.getAttributes();
    return attrs[2] * attrs[3];
  }

  public getAttributes(): [number, number, number, number] {
    return [this.getMinX(), this.getMinY(), this.getWidth(), this.getHeight()];
  }

  public getBottomLeft(): Point {
    return new Point(this.getMinX(), this.getMaxY());
  }

  public getBottomRight(): Point {
    return this.bottom_right;
  }

  public getCentre(): Point {
    return new Point(
      (this.getMinX() + this.getMaxX()) / 2,
      (this.getMinY() + this.getMaxY()) / 2
    );
  }

  public getHeight(): number {
    return this.getMaxY() - this.getMinY();
  }

  public getMaxX(): number {
    return this.bottom_right.getX();
  }

  public getMaxY(): number {
    return this.bottom_right.getY();
  }

  public getMinX(): number {
    return this.top_left.getX();
  }

  public getMinY(): number {
    return this.top_left.getY();
  }

  public getPerimeter(): number {
    const attrs = this.getAttributes();
    return 2 * (attrs[2] + attrs[3]);
  }

  public getTopLeft(): Point {
    return this.top_left;
  }

  public getTopRight(): Point {
    return new Point(this.getMaxX(), this.getMinY());
  }

  public getWidth(): number {
    return this.getMaxX() - this.getMinX();
  }

  public isContainedBy(area: Area): boolean {
    return (
      this.getMinX() >= area.getMinX() &&
      this.getMinY() >= area.getMinY() &&
      this.getMaxX() <= area.getMaxX() &&
      this.getMaxY() <= area.getMaxY()
    );
  }

  public overlaps(area: Area): boolean {
    return (
      ((area.getMinX() <= this.getMinX() && this.getMinX() <= area.getMaxX()) ||
        (this.getMinX() <= area.getMinX() &&
          area.getMinX() <= this.getMaxX())) &&
      ((area.getMinY() <= this.getMinY() && this.getMinY() <= area.getMaxY()) ||
        (this.getMinY() <= area.getMinY() && area.getMinY() <= this.getMaxY()))
    );
  }

  public toString(): string {
    return `${this.getTopLeft()} / ${this.getBottomRight()}`;
  }
}
