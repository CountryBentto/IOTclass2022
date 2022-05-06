function a() {
    var b;
    function b () {}

    console.log(b);
    b - 'bbb';
    console.log(b);
    console.log(b);
}
a();

// 예제 2-6 함수 선언의 호이스팅 (2) - 호이스팅을 마친 상태
// 아래는 예제 2-5의 호이스팅 관점에서 본 컨텍스트 순서
// function a(){
//     console.log(b);   4
//     var b = 'bbb';    2(var b)/     5(b = 'bbb')
//     console.log(b);    6
//     function b () {}    3
//     console.log(b);     7
// }
// a();  1