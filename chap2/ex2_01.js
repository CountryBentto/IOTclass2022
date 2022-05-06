//---------------------------------------------------- 
var a = 1;
function outer() {
    function inner(){
        console.log(a);
        var a = 3;
        console.log(a); //임의로 추가해서 본 코드입니다.
    }
    inner();
    console.log(a); // 이게 관건입니다..
}
outer();
console.log(a);

// 예제 2-1 실행 컨텍스트와 콜 스택

// 이해한 내용: 전역 컨텍스트 -> 전역 컨텍스트 처리 과정에서 outer(); 존재
// -> outer 함수 컨텍스트 -> outer 내부에 inner(); -> inner 함수 컨텍스트
