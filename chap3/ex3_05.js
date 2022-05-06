var x = function () {
var a = 1;
delete global.a;
console.log(a, global.a, this.a);   // 1 ud ud

var b = 2;
delete b;
console.log(b, global.b, this.b);   // 2 ud ud

global.c = 3;
delete global.c;
console.log(c, global.c, this.c); // 에러 발생 : c is not defined

global.d = 4;
delete d;
console.log(d, global.d, this.d); // 에러 발생 : d is not defined
};

console.log(x());
// 예제 3-5 전역변수와 전역객체(3)
