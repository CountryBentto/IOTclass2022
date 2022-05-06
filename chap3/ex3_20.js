var obj = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3
};
var arr = Array.from(obj);
// (3) ['a', 'b', 'c']
console.log(arr);
// console.log(obj); {0: 'a', 1: 'b', 2: 'c', length: 3}

// 예제 3-20 call/apply 메서드의 활용 1-4) ES6의 Array.from 메서드