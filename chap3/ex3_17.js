var obj = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3
};
Array.prototype.push.call(obj, 'd'); // 알아서 3: d를 지정해주는것으로 판단했습니다
console.log(obj);

var arr = Array.prototype.slice.call(obj);
console.log(arr);

// 예제 3-17 call/apply 메서드의 활용 1-1) 유사배열객체에 배열 메서드를 적용