### Readme 이호진 2022120754

## 요점 정리 - md파일에 정리한 내용은 각 코드파일에도 되어있습니다.  문장 구문별로 정리된 케이스는 복잡해 보이므로 따로 추가하진 않습니다.

    "version": "0.2.0",
    "configurations": [
        {
            "type": "pwa-node",
            "request": "launch",
            "name": "Launch Program",
            "skipFiles": [
                "<node_internals>/**"
            ],
            "program": "${workspaceFolder}\\chap3\\ex3_30"          // chap1 / chap2 / chap3로 구분
        }
    ]


# Chapter 1.

1-1. 변수 선언

1-2. 변수 선언 및 할당하기

1-3. 불변성
//해당 예제로는 데이터가 쓰인 주소와 변수들이 참조하는 주솟값을 알 수는 없음.
//하지만 4행, 5행에서 b와 c는 같은 주소를 참조하고 6행을 수행하며 b는 새로운 주소를 참조

1-4. 참조형 데이터의 할당
// 여러 프로퍼티로 이루어진 그룹의 자료형
// 따라서 obj1이 참조하는 주소에도 또한 각 프로퍼티가 가르키는 자료의 주소값이 쓰여짐

1-5. 참조형 데이터의 프로퍼티 재할당
// 특징: obj1이 참조하는 주소는 바뀌지 않았고, 참조하는 주소에 쓰여있는 주소값이 바뀌었음

1-6. 중첩된 참조형 데이터의 프로퍼티 할당
// 참조형 데이터의 한 프로퍼티가 또한 참조형 데이터로 주소에 주소를 무는 형태
// arr의 자료값이 배열이 아닌 형태가 될 때(obj.arr의 참조 카운트가 0이 되면), 
// 기존의 arr이 참조하던 주소 영역은 가비지 컬렉터에 의해 메모리 수거를 거침

1-7. 변수 복사
// obj2는 obj1가 참조하는 주소를 똑같이 참조함

1-8. 변수 복사 이후 값 변경 결과 비교 (1) = 객체의 프로퍼티 변경 시
// 이전 예제에서 특정 프로퍼티의 값을 바꾸어도 참조형 자료가 가르키는 주소는 동일했음
// 하지만 이 경우 obj1, obj2는 같은 주소를 참조함
// 따라서 obj1도 7열에 의해 c의 값이 20으로 변동됨
//console.log( obj1 == obj2 ) //참
//console.log( obj1 === obj2 ) //참

1-9. 변수 복사 이후 값 변경 결과 비교 (2) - 객체 자체를 변경했을 때
// 실질적으로 c의 값만 바뀌었지만, 새롭게 객체를 지정하므로 새로운 주소를 할당받음

1-10. 객체의 가변성에 따른 문제점
// user가 참조하는 주소는 같고 함수로 인해서 참조하는 주소에 쓰인 참조 주소가 동일하게 변경됨.
// 12 행을 실행하면 user와 user2는 둘 다 참조형 자료이므로 같은 주소를 참조하게 되고, 해당 주소에서 참조하는 자료의 주소를 새로 할당, user와 user2 자체는 같은 주소를 참조하므로 기존의 자료가 유지되지않음


1-11. 객체의 가변성에 따른 문제점의 해결 방법
// 자료 자체를 새로 정의하면 참조형 자료가 참조하는 주소가 바뀐다고 이전 예제에서 학습한 바 있음. 따라서 함수를 객체의 프로퍼티 변경을 하지 않고 객체 자체를 지정해주면 기존의 자료를 보존 가능

1-12. 기존 정보를 복사해서 새로운 객체를 반환하는 함수 (얕은 복사)
// 참조형 자료가 담는 프로퍼티가 많을 수록 함수의 설정이 복잡해짐을 해결하기 위해서 기존의 프로퍼티를 그대로 복사하는 함수

1-13. copyObject를 이용한 객체 복사
// 6행의 함수 사용은 오로지 새로운 객체를 얻어내어 객체가 별도의 주소값을 갖도록 하는 것에 의의가 있음.

1-14. 중첩된 객체에 대한 얕은 복사
// 참조형 객체 내부에 또 참조형의 객체가 존재하므로, 얕은 복사로는 22 - 23 , 25 - 26에서 결과가 같음
// urls의 주소는 여전히 동일하기 때문

1-15. 중첩된 객체에 대한 깊은 복사
// 내부의 참조형 자료에 대해서도 카피

1-16. 객체의 깊은 복사를 수행하는 범용 함수            
// 내부의 참조형 객체에 대해서도 새로운 주소 부여

1-17. 깊은 복사 결과 확인
// 결과가 책의 내용과는 약간 다릅니다...
// 일일이 프로퍼티를 확인하면 잘 나타나긴 합니다만, obj와 obj2를 로그로 보면 객체를 다 보여주질 않습니다

1-18. JSON을 활용한 간단한 깊은 복사
// JSON 이용

1-19. 자동으로 undefined를 부여하는 경우
// 존재하지 않는 프로퍼티라서 오류문 발생

1-20. undefined와 배열
// empty x 3 출력
// (3) […]

1-21. 빈 요소와 배열의 순회

1-22. undefined와 null의 비교
null과 undefined는 ===으로 구분이 가능함

# Chapter 2.

2-1. 실행 컨텍스트와 콜 스택
// 이해한 내용: 전역 컨텍스트 -> 전역 컨텍스트 처리 과정에서 outer(); 존재
// -> outer 함수 컨텍스트 -> outer 내부에 inner(); -> inner 함수 컨텍스트

2-2. 매개변수와 변수에 대한 호이스팅(1) - 원본 코드
// a(null);
// a(); 로 확인

2-3. 매개변수와 변수에 대한 호이스팅 (2) - 매개변수를 변수 선언/할당과
// 같다고 간주해서 변환한 상태

2-4. 매개변수와 변수에 대한 호이스팅 (3) - 호이스팅을 마친 상태
//예제 2-2와 같은 함수를 호이스팅관점에서 설계를 하여 출력 결과가 같음

2-5. 함수 선언의 호이스팅 (1) - 원본 코드

2-6. 함수 선언의 호이스팅 (2) - 호이스팅을 마친 상태
// 아래는 예제 2-5의 호이스팅 관점에서 본 컨텍스트 순서
// function a(){
//     console.log(b);   4
//     var b = 'bbb';    2(var b)/     5(b = 'bbb')
//     console.log(b);    6
//     function b () {}    3
//     console.log(b);     7
// }
// a();  1

2-7. 함수 선언의 호이스팅 (3) - 함수 선언문을 함수 표현식으로 바꾼 코드
// function a() {
//     var b;
//     function b () {}

//     console.log(b);
//     b - 'bbb';
//     console.log(b);
//     console.log(b);
// }
// a();

2-8. 함수를 정의하는 세 가지 방식
// 별도의 변수 처리를 안할 시 함수명 = 변수명
// 선언 없음 함수명이 d, 함수를 호출할 때 변수명 c를 사용함
//단 함수 내에 한해서 함수명으로 호출 가능(재귀함수)

2-9. 함수 선언문과 함수 표현식 (1) - 원본 코드

2-10. 함수 선언문과 함수 표현식 (2) - 호이스팅을 마친 상태

2-11. 함수 선언문의 위험성
// 호이스팅을 거치면 함수선언이 최우선 처리되므로 두 함수를 중복해선 안된다는 의미
// char & int, false

2-12. 상대적으로 함수 표현식이 안정함을 나타내는 코드

2-13. 스코프 체인
//스코프 체인상에서 가장 먼저 발견된 식별자에 먼저 접근
<!-- var a = 1;      //1
var outer = function () {       //2(var outer;)     /       4(function)
    var inner  = function () {      //5(var inner)      /       7(function)
        console.log(a);     //8(var a;)
        var a = 3;      //9(var a;)     /10(a = 3;)
    };                  //11 inner 함수 컨텍스트 종료
    inner();        //6 -> inner function
    console.log(a);     //12 (var a;) (inner에서 쓰인 a는 해당 스코프에서만 사용, 여기에서 a는 1로 할당된 a)
};              //13 outer 함수 컨텍스트 종료
outer();        //3 -> outer function
console.log(a);     //14 (var a;) 및 전역 컨텍스트 종료 -->

2-14. 스코프 체인 확인(크롬전용) 
// 해당 구문 및 크롬전용 코드구문은 실행하지 않았습니다.

2-15. 스코프 체인 확인(2) - 크롬 전용

2-16. 스코프 체인 확인(3)

# Chapter 3.

3-1. 전역 공간에서의 this(브라우저 환경)
// window가 잡히지 않으므로 예제 3-2로 실행합니다.

3-2. 전역 공간에서의 this(Node.js 환경)
// 내용과 다르게 false가 출력됩니다... this를 못잡는게 아닌가 싶습니다.

3-3. 전역변수와 전역객체(1)

// this자체가 제대로 잡히지를 않아서 3장의 내용 실행이 전부 이상이 있는것으로 보입니다.
// 또한 global도 global {global: global, clearInterval: ƒ, clearTimeout: ƒ, setInterval: ƒ, setTimeout: ƒ, …}
// 라고 출력이 되는데 변수에 대한 저장이 이 곳에서 이루어지는게 아닌것 처럼 보입니다.

// 구글링으로 알아본 결과 함수 선언문 안에서의 this가 글로벌로 잡힌다고 합니다. 전역환경에서는 module.exports 가 this라고 하는데 아직은 이해가 부족합니다만,
// global이 this로 잡히려면 함수 내에서 이루어진다고 이해하고 넘어갔습니다.

3-4. 전역변수와 전역객체(2)
// 앞서 남긴 주석과 마찬가지로 함수 구문 내부에서 동작하므로, 전역 컨텍스트에서 함수를 한 번 선언하여 동작시켰습니다.
// 문제는 여기서 1 3 3이 출력이 되는 것인데... 코어자바스크립트 책이 오래되지도 않았는데 이유는 잘 모르겠습니다.
// 추측하기로는 a는 확정형, global을 참조형 자료로서 따로 보는 것이라고 생각됩니다.

3-5. 전역변수와 전역객체(3)

3-6. 함수로서 호출, 메서드로서 호출
//  func(1);
//global {global: global, clearInterval: ƒ, clearTimeout: ƒ, setInterval: ƒ, setTimeout: ƒ, …} 1

3-7. 메서드로서 호출 - 점 표기법, 대괄호 표기법
<!-- obj.method(1);  //메서드 호출 case 1
obj['method'](2);   //메서드 호출 case 2 -->

3-8. 메서드 내부에서의 this

3-9. 내부함수에서의 this
// 함수를 호출시 함수로서 호출하면 전역객체
// 메서드로서 호출하면 메서드가 있는 객체를 this로 지정

3-10. 내부함수에서의 this를 우회하는 방법
// 함수 외부에서 지역을 설정하고 가는 방법

3-11. this를 바인딩하지 않는 함수(화살표 함수)
//함수로서 호출했지만 화살표 함수 특성으로 this가 obj를 잡음

3-12. 콜백 함수 내부에서의 this
// 손을 써보았는데 document가 내장 객체로 되어있는것 같지 않습니다.

3-13. 생성자 함수
// var choco = Cat('초코', 7);
// var nabi = Cat('나비',5);
// console.log(choco, nabi); // new 명령어로 변수를 각각 할당함을 알 수 있음

3-14. call 메서드(1)
// this === global
// this = {x: 1}을 call로 명시

3-15. call 메서드(2)
// this가 { a: 4 }가 되었으므로 this.a === 4

3-16. apply 메서드

3-17. call/apply 메서드의 활용 1-1) 유사배열객체에 배열 메서드를 적용

3-18. call/apply 메서드의 활용 1-2) arguments.NodList에 배열 메서드를 적용
// document를 못받음

3-19. call/apply 메서드의 활용 1-3) 문자열에 배열 메서드 적용 예시
// Uncaught TypeError TypeError: [object Array] is not a function 이라는 원인불명 에러 발생

3-20. call/apply 메서드의 활용 1-4) ES6의 Array.from 메서드
<!-- var arr = Array.from(obj);
// (3) ['a', 'b', 'c']
console.log(arr);
// console.log(obj); {0: 'a', 1: 'b', 2: 'c', length: 3} -->

3-21. call/apply 메서드의 활용 2) 생성자 내부에서 다른 생성자를 호출

3-22. call/apply 메서드의 활용 3-1) 최대/최솟값을 구하는 코드를 직접 구현

3-23. call/apply 메서드의 활용 3-2) 여러 인수를 받는 메서드(Math.max/Math.min)에 apply를 적용

3-24. call/apply 메서드의 활용 3-3) ES6의 펼치기 연산자 활용

3-25. bind 메서드 - this 지정과 부분 적용 함수 구현
<!-- var bindFunc1 = func.bind({ x: 1 }); // this = {}
var bindFunc2 = func.bind({ x: 1 }, 4, 5); // this = {}, 4, 5 -->

3-26. bind 메서드 - name 프로퍼티
// console.log(func.name === 'func'); //func.name === 'func';

3-27. a) 내부함수에 this 전달 - call vs bind
// call 이용

3-27. b) 내부함수에 this 전달 - call vs bind
// bind 이용

3-28. bind 메서드 - 내부함수에 this 전달

3-29. 화살표 함수 내부에서의 this

3-30. thisArg를 받는 경우 예시 - forEach 메서드

3-31. 콜백 함수와 함께 thisArg를 받는 메서드
// 비실행예제

# Chapter 4.

4-1. 콜백 함수 예제(1-1) setInterval
// delay 300ms마다 카운트되어 0~4 차례대로 출력

4-2. 콜백 함수 예제(1-2) setInterval
// 4-1과 같은 결과 그러나 코드내에서 콜백함수를 정의해놓고 두고두고 사용이 가능하다는 장점

4-3. 콜백 함수 예제 (2-1) Array.prototype.map

4-4. 콜백 함수 예제 (2-2) Array.prototype.map - 인자의 순서를 임의로 바꾸어 사용한 경우
// 맵의 정의에 맞추어 메서드가 설계 되어있는데 사용자가 임의로 바꾸면 정상적으로 동작하지 않기 때문에
// 코딩 시 주의를 요하는 포인트가 될 것으로 생각됨

4-5. 콜백 함수 예제 (2-3) Array.prototype.map - 구현
// 확인할 수단이 생각이 나질 않습니다...

4-6. 콜백 함수 내부에서의 this
// 3장에서의 고질적인 문제때문에 this 등의 함수가 포함된 예제의 경우 실행에 장애가 있습니다

4-7. 메서드를 콜백 함수로 전달한 경우
//global {global: global, clearInterval: ƒ, clearTimeout: ƒ, setInterval: ƒ, setTimeout: ƒ, …} 4 0
global {global: global, clearInterval: ƒ, clearTimeout: ƒ, setInterval: ƒ, setTimeout: ƒ, …} 5 1
global {global: global, clearInterval: ƒ, clearTimeout: ƒ, setInterval: ƒ, setTimeout: ƒ, …} 6 2//

4-8. 콜백 함수 내부의 this에 다른 값을 바인딩하는 방법(1) - 전통적인 방식

4-9. 콜백 함수 내부에서 this를 사용하지 않은 경우
// this에 대한 기술이 없어 함수를 재활용하기 힘듦

4-10. 예제 4-8의 func 함수 재활용
  // 12번째 줄, 에러 발생: callback must be a function, var 선언으로 함수로 인식하지 않는 듯 
  // 13번째 줄을 임의로 추가하였으나, 예상과 다르게 obj1이 출력됨
  // 역시 16번째 줄의 callback3 또한 var 선언으로 인해 함수로 인식하지 못함
  // 타입을 변환하는 함수가 있다면 활용하여 해결할 수 있을 것으로 보임

4-11. 콜백 함수 내부의 this에 다른 값을 바인딩하는 방법(2) - bind 메서드 활용

4-12. 콜백 지옥 예시 (1-1)

4-13. 콜백 지옥 해결 - 기명함수로 변환

4-14. 비동기 작업의 동기적 표현(1) - Promise(1)
// ES6의 Promise 함수 이용

4-15. 비동기 작업의 동기적 표현(2) - Promise(2)
// ES6의 Promise 함수 이용

4-16. 비동기 작업의 동기적 표현(3) - Generator
// ES6의 Generatoi 함수 이용

4-17. 비동기 작업의 동기적 표현(4) - Promise + Async/await
// ES2017의 async/await

# Chapter 5.

5-1. 외부 함수의 변수를 참조하는 내부 함수(1)
// inner함수에서 정의되지 않은 a를 외부에서 참조, 실행 컨텍스트 종료 후에 주소값들은 후에 가비지 컬렉팅

5-2. 외부 함수의 변수를 참조하는 내부 함수(2)
// 5-1과 마찬가지로 실행 컨텍스트가 종료되면 내부 함수를 호출할 수 없음

5-3. 외부 함수의 변수를 참조하는 내부 함수(3)
// return inner(); -> inner; 함수 자체를 반환, outer2에서는 inner을 참조할 수 있게 됨 (LexicalEnv. -> outer-Env 참조복사)

5-4. return 없이도 클로저가 발생하는 다양한 경우
// (1) setInverval에 의해 참조, (2) document undefined,,

5-5. 클로저의 메모리 관리
// 더이상 참조 함수 내의 변수 사용이 필요 없어지면 null을 할당하여 참조 카운트를 0으로 만들어 가비지 컬렉팅

5-6. 콜백 함수와 클로저(1)
// document 참조를 어떻게 바꿀 방법을 모르겠습니다. document undefined

5-7. 콜백 함수와 클로저(2)
// document undefined

5-8. 콜백 함수와 클로저(3)
// document undefined

5-9. 콜백 함수와 클로저(4)
// document undefined

5-10. 간단한 자동차 객체
// 이전 예제들과 같이 var run2 = car.run(); 하여 할당, 매번 결괏값이 변하는 것을 확인

5-11. 클로저로 변수를 보호한 자동차 객체(1)
// 변수 접근을 막기 위해서 creatCar 선언, moved를 get을 이용해서 부여

5-12. 클로저로 변수를 보호한 자동차 객체(2)
// 5-11에서 객체 변경을 막은 보다 안전한 코드

5-13. bind 메서드를 활용한 부분 적용 함수

5-14. 부분 적용 함수 구현(1)
// 5-13에서 개선한 부분 적용 함수 구문, 실행 시점의 this 반영하여 실제 this에는 영향을 미치지 않음

5-15. 부분 적용 함수 구현(2)
// window undefined,, _프로퍼티 설정을 하여 삭제/변경 등의 접근을 방어

5-16. 부분 적용 함수 - 디바운스
// document undefined,, <참고> : _ "비워놓음" 전역공간 침범 ->  symbol.for 메서드 활용

5-17. 커링 함수(1)

5-18. 커링 함수(2)

