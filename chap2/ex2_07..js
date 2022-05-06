function a () {
    var b;
    var b = function b () { }
    
    console.log(b);
    b = 'bbb';
    console.log(b);
    console.log(b);
}
a();

// 예제 2-7 함수 선언의 호이스팅 (3) - 함수 선언문을 함수 표현식으로 바꾼 코드

// function a() {
//     var b;
//     function b () {}

//     console.log(b);
//     b - 'bbb';
//     console.log(b);
//     console.log(b);
// }
// a();