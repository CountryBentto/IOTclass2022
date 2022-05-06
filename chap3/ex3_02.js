console.log(this);
console.log(global);
console.log(this === global);
console.log(this == global);

console.log(this);
console.log(global);

// 예제 3-2 전역 공간에서의 this(Node.js 환경)
// 내용과 다르게 false가 출력됩니다... this를 못잡는게 아닌가 싶습니다.