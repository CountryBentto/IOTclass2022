var a = 1;
console.log(a);
//console.log(window.a); // 브라우저 환경
console.log(global.a);
console.log(this.a);


console.log(this);
console.log(global);


console.log(this, module.exports, exports);
console.log('----');
console.log(this === module.exports);
console.log('----');
console.log(this === exports);
console.log('----');
console.log(module.exports === exports);
var y = function a() {
    console.log('Is "this" means "global"?', this === global)
}
console.log('----');
console.log(y());
console.log('----');
console.log('Is "this" means "global"?', this === global)
// 예제 3-3 전역변수와 전역객체(1)

// this자체가 제대로 잡히지를 않아서 3장의 내용 실행이 전부 이상이 있는것으로 보입니다.
// 또한 global도 global {global: global, clearInterval: ƒ, clearTimeout: ƒ, setInterval: ƒ, setTimeout: ƒ, …}
// 라고 출력이 되는데 변수에 대한 저장이 이 곳에서 이루어지는게 아닌것 처럼 보입니다.

// 구글링으로 알아본 결과 함수 선언문 안에서의 this가 글로벌로 잡힌다고 합니다. 전역환경에서는 module.exports 가 this라고 하는데 아직은 이해가 부족합니다만,
// global이 this로 잡히려면 함수 내에서 이루어진다고 이해하고 넘어갔습니다.