const Point = require("./Point");
module.exports = class Triangle {
  constructor(d1, d2, d3) {
    this.d1 = new Point(d1.x, d1.y);
    this.d2 = new Point(d2.x, d2.y);
    this.d3 = new Point(d3.x, d3.y);
  }

  chuvi() {
    return (
      Point.distance(this.d1, this.d2) +
      Point.distance(this.d1, this.d3) +
      Point.distance(this.d2, this.d3)
    );
  }
  loaiTamGiac() {
    const a = Point.distance(this.d1, this.d2);
    const b = Point.distance(this.d1, this.d3);
    const c = Point.distance(this.d2, this.d3);
    //console.log(c);
    const a2 = Math.pow(a, 2);
    const b2 = Math.pow(b, 2);
    const c2 = Math.pow(c, 2);

    //console.log(a2 + " " +b2 + " " +c2);
    if (a + b < c || a + c < b || b + c < a) {
      return "K là tam giác";
    } else {
      if (a === b && b === c && c === a) return "Tam giác đều";
      if (a === b || b === c || c === a) {
        if (c2 === a2 + b2 || b2 === a2 + c2 || a2 === b2 + c2) {
          return "Tam giác vuông cân";
        } else return "Tam giác cân";
      }
      if (c2 === a2 + b2 || b2 === a2 + c2 || a2 === b2 + c2) {
        return "Tam giác vuông";
      }
      return "Tam giác thường";
    }
  }
};
