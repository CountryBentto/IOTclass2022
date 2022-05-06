var obj = {
    outer: function () {
        console.log(this);
        var innerFunc = () => {
            console.log(this);
        };
        innerFunc(); //함수로서 호출했지만 화살표 함수 특성으로 this가 obj를 잡음
    }
};
obj.outer();

// 예제 3-11 this를 바인딩하지 않는 함수(화살표 함수)