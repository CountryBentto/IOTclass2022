var arr1 = [undefined, 1];
var arr2 = [];
arr2[1] = 1;

arr1.forEach(function (v, i) { console.log(v, i); });
arr2.forEach(function (v, i) { console.log(v, i); });

m1 = arr1.map(function (v, i) {return v + i; });
m2 = arr2.map(function (v, i) {return v + i; });

f1 = arr1.filter(function (v) { return !v; });
f2 = arr2.filter(function (v) { return !v; });

r1 = arr1.reduce(function (p, c, i) { return p + c + i; }, '');
r2 = arr2.reduce(function (p, c, i) { return p + c + i; }, '');

console.log(m1);
console.log(m2);

console.log(f1);
console.log(f2);

console.log(r1);
console.log(r2);

// 예제 1-21 빈 요소와 배열의 순회