var copyObjectViaJSON = function (target) {
    return JSON.parse(JSON.stringify(target));
};
var obj = {
    a: 1,
    b: {
        c: null,
        d: [1, 2],
        func1: function () { console.log(3); }
    },
    func2: function () { console.log(4); }
};
var obj2 = copyObjectViaJSON(obj);

obj2.a = 3;
obj2.b.c = 4;
obj.b.d[1] = 3;

console.log(obj);
console.log(obj2);
console.log(obj.b);
console.log(obj2.b);
console.log(obj.b.d);
console.log(obj2.b.d);

// 예제 1-18 JSON을 활용한 간단한 깊은 복사