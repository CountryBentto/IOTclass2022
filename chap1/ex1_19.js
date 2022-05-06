var a;
console.log(a);

var obj = { a: 1 };
console.log(obj.a);
console.log(obj.b);  // 존재하지 않는 프로퍼티라서 긴 오류문 발생
console.log(b); // 같은 이유

var func = function () { };
var c = func();
console.log(c);

// 예제 1-19 자동으로 undefined를 부여하는 경우