const Point = require("./Point");

const p1 = new Point(1, 2);
const p2 = new Point(2, 5);
const p3 = new Point(1.225,2.225);
const p4 = new Point(a,b);
const p5 = new Point(c,d);


//console.log(Point.distance(p1, p2));

//Test tính khoag2 cách 2 điểm => True
test("Is distance between 2 point 3.1622776601683795 ?", () => {
  expect(Point.distance(p1, p2)).toBe(3.1622776601683795);
});

//Test tính khoag2 cách 2 điểm => Fail
test("Is distance between 2 point 3 ?", () => {
  expect(Point.distance(p1, p2)).toBe(3);
});

//Test tính khoag2 cách 2 điểm => Fail
test("calculate distance between 2 point p1,p3", () => {
  expect(Point.distance(p1, p3)).toBe(5);
});

test("test point is char", () => {
  expect(Point.distance(p4, p5)).toBe(5);
});

