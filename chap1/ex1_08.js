var a = 10;
var b = a;
var obj1 = { c: 10, d: 'ddd' };
var obj2 = obj1;

b = 15;
obj2.c = 20;  //이전 예제에서 특정 프로퍼티의 값을 바꾸어도 참조형 자료가 가르키는 주소는 동일했음
//하지만 이 경우 obj1, obj2는 같은 주소를 참조함
//따라서 obj1도 7열에 의해 c의 값이 20으로 변동됨

//예제 1-8 변수 복사 이후 값 변경 결과 비교 (1) = 객체의 프로퍼티 변경 시


//console.log( obj1 == obj2 ) //참
//console.log( obj1 === obj2 ) //참
