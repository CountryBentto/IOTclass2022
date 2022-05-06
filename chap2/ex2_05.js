function a(){
    console.log(b);
    var b = 'bbb';
    console.log(b);
    function b () {}
    console.log(b); // und 아닌 'bbb' 출력
}
a();

// 예제 2-5 함수 선언의 호이스팅 (1) - 원본 코드