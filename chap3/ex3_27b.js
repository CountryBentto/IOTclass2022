var obj = {
    outer: function() {
        console.log(this);
        var innerFunc = function() {
            console.log(this);
        }.bind(this); //bind
        innerFunc();
    }
};
obj.outer();


// 예제 3-27 b) 내부함수에 this 전달 - call vs bind