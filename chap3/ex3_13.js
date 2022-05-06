var Cat = function (name, age) {
    this.bark = '야옹';
    this.name = name;
    this.age = age;
};
var choco = new Cat('초코', 7);
var nabi = new Cat('나비',5);
console.log(choco, nabi);

// var choco = Cat('초코', 7);
// var nabi = Cat('나비',5);
// console.log(choco, nabi); // new 명령어로 변수를 각각 할당함을 알 수 있음

// 예제 3-13 생성자 함수