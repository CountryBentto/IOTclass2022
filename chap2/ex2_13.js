var a = 1;      //1
var outer = function () {       //2(var outer;)     /       4(function)
    var inner  = function () {      //5(var inner)      /       7(function)
        console.log(a);     //8(var a;)
        var a = 3;      //9(var a;)     /10(a = 3;)
    };                  //11 inner 함수 컨텍스트 종료
    inner();        //6 -> inner function
    console.log(a);     //12 (var a;) (inner에서 쓰인 a는 해당 스코프에서만 사용, 여기에서 a는 1로 할당된 a)
};              //13 outer 함수 컨텍스트 종료
outer();        //3 -> outer function
console.log(a);     //14 (var a;) 및 전역 컨텍스트 종료

// 예제 2-13 스코프 체인

//스코프 체인상에서 가장 먼저 발견된 식별자에 먼저 접근