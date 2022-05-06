var obj = {
    outer: function () {
        console.log(this); // 메서드 -> obj
        var innerFunc1 = function () {
            console.log(this); // 함수 -> global
        };
        innerFunc1(); // 함수 호출

        var self = this;    //선언  // outer의 객체 obj
        var innerFunc2 = function () {  //선언
            console.log(self);      //외부에서 this를 지정하고 들어옴, obj
        };
        innerFunc2();   //함수 호출
    }
};
obj.outer();  //메서드 호출

// 예제 3-10 내부함수에서의 this를 우회하는 방법

// 함수 외부에서 지역을 설정하고 가는 방법