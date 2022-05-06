function z() { // 앞서 남긴 주석과 마찬가지로 함수 구문 내부에서 동작하므로, 전역 컨텍스트에서 함수를 한 번 선언하여 동작시켰습니다.
var a = 1;
global.b = 2;
console.log(a, global.a, this.a);
console.log(b, global.b, this.b);

global.a = 3;
b = 4;
console.log(a, global.a, this.a); // 문제는 여기서 1 3 3이 출력이 되는 것인데... 코어자바스크립트 책이 오래되지도 않았는데 이유는 잘 모르겠습니다.
                                  // 추측하기로는 a는 확정형, global을 참조형 자료로서 따로 보는 것이라고 생각됩니다.
console.log(b, global.b, this.b);
};

console.log(z());
// 예제 3-4 전역변수와 전역객체(2)