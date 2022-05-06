var obj1 = {
    outer: function () {
        console.log(this); //메서드로서 함수 호출, obj1 출력
        var innerFunc = function () {
            console.log(this); //함수를 깡으로 호출, this 지정 없이 global
        }
        innerFunc(); //함수 호출

        var obj2 = {
            innerMethod: innerFunc
        };
        obj2.innerMethod();  // 3 메서드 참조, innerfunc 수행, obj2 출력
    }
};
obj1.outer(); //메서드로서 호출

// 예제 3-9 내부함수에서의 this

// 정리: 함수를 호출시 함수로서 호출하면 전역객체
//      메서드로서 호출하면 메서드가 있는 객체를 this로 지정