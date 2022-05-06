var obj = {
    logThis: function() {
        console.log(this);
    },
    logThisLater1: function() {
        setTimeout(this.logThis, 500);
    },
    logThisLater2: function() {
        setTimeout(this.logThis.bind(this), 1000);
    }
};
obj.logThis();
obj.logThisLater1();
obj.logThisLater2();        //obj


// 예제 3-28 bind 메서드 - 내부함수에 this 전달