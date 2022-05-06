var func = function (a, b, c, d) {
    console.log(this, a, b, c, d);
};
var bindFunc = func.bind({ x: 1 }, 4, 5);
console.log(func.name);
console.log(bindFunc.name); // bound func

// console.log(func.name === 'func'); //func.name === 'func';

// 예제 3-26 bind 메서드 - name 프로퍼티