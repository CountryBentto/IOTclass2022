function a (){
    var x = 1;
    console.log(x);
    var x;
    console.log(x);
    var x = 2;
    console.log(x);
}
a();

// 예제 2-3 매개변수와 변수에 대한 호이스팅 (2) - 매개변수를 변수 선언/할당과
// 같다고 간주해서 변환한 상태