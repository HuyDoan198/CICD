const Point = require('./Point');
const Triangle = require('./Triangle');

const p1 = new Point(1,2);
const p2 = new Point(1,3);
const p3 = new Point(2,5);
const p4 = new Point(0,0);
const p5 = new Point(0,2);
const p6 = new Point(2,0);
const p7 = new Point(-2,0);
const p8 = new Point(0,5);


//tam giac thuong => True
const tg = new Triangle(p1,p2,p3);
test('Kiểm tra tam giác thường', () => {
    expect(tg.loaiTamGiac()).toBe("Tam giác thường");
})

// // tam giac vuong => Fail
// const tg2 = new Triangle(p1,p2,p3);
// test('Kiểm tra tam giác vuông', () => {
//     expect(tg2.loaiTamGiac()).toBe("Tam giác vuông");
// })

// tam giac can => True
const tg3 = new Triangle(p6,p7,p8);
test('Kiểm tra tam giác cân ?', () => {
    expect(tg3.loaiTamGiac()).toBe("Tam giác cân");
})

// // tam giac deu => Fail
// const tg4 = new Triangle(p6,p7,p8);
// test('Kiểm tra tam giác cân ?', () => {
//     expect(tg4.loaiTamGiac()).toBe("Tam giác đều");
// })

// // tam giac vuông cân => Fail
// const tg5 = new Triangle(p4,p5,p6);
// test('Kiểm tra tam giác vuông cân ?', () => {
//     expect(tg5.loaiTamGiac()).toBe("Tam giác vuông cân");
// })


