var func = function (a, b, c) {
    console.log(this, a, b, c);
};

func(1, 2, 3); // this === global
func.call({ x: 1}, 4, 5, 6);    // this = {x: 1}을 call로 명시

// 예제 3-14 call 메서드(1)