var obj = {
    outer: function() {
        console.log(this);
        var innerFunc = () => {
            console.log(this);
        };
        innerFunc();
    }
};
obj.outer();

// 예제 3-29 화살표 함수 내부에서의 this