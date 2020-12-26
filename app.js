const Point = class {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
};


const Triangle = class {
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
  loaiTamGiac(){
    
  }
};


const p1 = new Point(1, 2);
const p2 = new Point(2, 3);
const p3 = new Point(3, 5);

const tg = new Triangle(p1, p2, p3);
const cv = tg.chuvi();
console.log(cv);

