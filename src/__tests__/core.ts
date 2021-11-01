import Area from "../main/Area";
import LineSegment from "../main/LineSegment";
import Point from "../main/Point";
import Vector from "../main/Vector";

test("point and vector", () => {
  const a: Point = new Point(10, 10);
  const b: Point = new Point(20, 10);
  const c: Point = a.clone();
  const d: Point = a.add(b);

  // b co-ords are added to a
  expect(d.getX()).toBe(30);
  expect(d.getY()).toBe(20);

  // a, b and c are unchanged
  expect(a.getX()).toBe(10);
  expect(a.getY()).toBe(10);

  expect(b.getX()).toBe(20);
  expect(b.getY()).toBe(10);

  expect(c.getX()).toBe(10);
  expect(c.getY()).toBe(10);

  const e: Point = b.subtract(c);
  expect(e.getX()).toBe(10);
  expect(e.getY()).toBe(0);

  // a, b and c are unchanged
  expect(a.getX()).toBe(10);
  expect(a.getY()).toBe(10);

  expect(b.getX()).toBe(20);
  expect(b.getY()).toBe(10);

  expect(c.getX()).toBe(10);
  expect(c.getY()).toBe(10);

  // d = [30, 20], e = [10, 0], a, c = [10, 10]

  let v: Vector = Vector.fromOriginTo(d);
  expect(v.getBearing().toFixed(2)).toBe("123.69");
  expect(v.getMagnitude().toFixed(3)).toBe("36.056");

  v = Vector.fromOriginTo(e);
  expect(v.getBearing()).toBe(90);
  expect(v.getMagnitude()).toBe(10);

  v = Vector.between(d, e);
  expect(v.getBearing()).toBe(315);
  expect(v.getMagnitude().toFixed(3)).toBe("28.284");

  let f: Point = v.toPoint();
  expect(f.getX().toFixed(5)).toBe("-20.00000");
  expect(f.getY().toFixed(5)).toBe("-20.00000");
});

test("line", () => {
  const l1 = new LineSegment(new Point(3, 2), new Point(7, 5));
  const gi1 = l1.getGradientIntersection();
  expect(gi1).toEqual([0.75, -0.25]);

  const l2 = new LineSegment(new Point(3, 2), new Point(7, 2));
  const gi2 = l2.getGradientIntersection();
  expect(gi2).toEqual([0, 2]);

  const l3 = new LineSegment(new Point(3, 2), new Point(3, 9));
  const gi3 = l3.getGradientIntersection();
  expect(gi3).toEqual([Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]);
});

test("area", () => {
  const a1 = new Area(new Point(3, 2), new Point(9, 8));
  expect(a1.getMinX()).toBe(3);
  expect(a1.getMaxX()).toBe(9);
  expect(a1.getMinY()).toBe(2);
  expect(a1.getMaxY()).toBe(8);
  expect(a1.getWidth()).toBe(6);
  expect(a1.getHeight()).toBe(6);
  expect(a1.getArea()).toBe(36);
  expect(a1.getPerimeter()).toBe(24);

  expect(a1.contains(new Point(5, 7))).toBe(true);
  expect(a1.contains(new Point(10, 7))).toBe(false);
  expect(a1.contains(new Point(5, 9))).toBe(false);

  const a2 = new Area(new Point(10, 4), new Point(12, 6));
  expect(a1.isContainedBy(a2)).toBe(false);
  expect(a2.isContainedBy(a1)).toBe(false);
  expect(a1.overlaps(a2)).toBe(false);

  const a3 = new Area(new Point(6, 4), new Point(10, 6));
  expect(a1.isContainedBy(a3)).toBe(false);
  expect(a3.isContainedBy(a1)).toBe(false);
  expect(a1.overlaps(a3)).toBe(true);

  const a4 = new Area(new Point(6, 4), new Point(9, 8));
  expect(a1.isContainedBy(a4)).toBe(false);
  expect(a4.isContainedBy(a1)).toBe(true);
  expect(a1.overlaps(a4)).toBe(true);
});
