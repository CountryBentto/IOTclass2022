var func = function (a, b, c, d) {
    console.log(this, a, b, c, d);
};
func(1, 2, 3, 4);

var bindFunc1 = func.bind({ x: 1 }); // this = {}
bindFunc1(5, 6, 7, 8);

var bindFunc2 = func.bind({ x: 1 }, 4, 5); // this = {}, 4, 5
bindFunc2(6, 7);
bindFunc2(8, 9);

// 예제 3-25 bind 메서드 - this 지정과 부분 적용 함수 구현