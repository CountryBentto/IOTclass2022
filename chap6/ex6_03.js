var arr = [1, 2];
console.log(Array.prototype.constructor === Array); // true
console.log(arr.__proto__.constructor === Array); // true
console.log(arr.constructor === Array); // true

var arr2 = new arr.constructor(3, 4);
console.log(arr2); // [3, 4]

// 예제 6-3 constructor 프로퍼티