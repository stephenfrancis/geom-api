
import Point from "../main/Point";
import Vector from "../main/Vector";


test("stuff", () => {
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
