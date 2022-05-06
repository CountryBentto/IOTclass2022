function a() {
    var x; //function a(x) 선언
    var x; //var x;
    var x; //var x = 2; 에서의 선언 (var x;)

    x = 1;  // a(1) 에서 x = 1이 입력
    console.log(x);
    console.log(x); //호이스팅 관점에 따라 2번째 로그에서도 x = 1 이 출력된다.
    x = 2; // var x = 2; 에서의 할당 (x = 2;)
    console.log(x);
}
a(1); //예제 2-2와 같은 함수를 호이스팅관점에서 설계를 하여 출력 결과가 같음

// 예제 2-4 매개변수와 변수에 대한 호이스팅 (3) - 호이스팅을 마친 상태