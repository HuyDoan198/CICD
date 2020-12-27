const Point = require("./Point");

const p1 = new Point(1, 2);
const p2 = new Point(2, 5);
//console.log(Point.distance(p1, p2));

//Test tính khoag2 cách 2 điểm => True
test("Is distance between 2 point 3.1622776601683795 ?", () => {
  expect(Point.distance(p1, p2)).toBe(3.1622776601683795);
});

// //Test tính khoag2 cách 2 điểm => Fail
// test("Is distance between 2 point 3 ?", () => {
//   expect(Point.distance(p1, p2)).toBe(3);
// });
