var obj = {
    outer: function() {
        console.log(this);
        var innerFunc = function() {
            console.log(this);
        };
        innerFunc.call(this); // call
    }
};
obj.outer();


// 예제 3-27 a) 내부함수에 this 전달 - call vs bind