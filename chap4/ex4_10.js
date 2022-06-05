var obj1 = {
    name: 'obj1',
    func: function() {
      console.log(obj1.name);
    },
  };
  var obj2 = {
    name: 'obj2',
    func: obj1.func,
  };
  var callback2 = obj2.func(); // 4-8 copy
  setTimeout(callback2, 1500); //에러 발생 callback must be a function
  setTimeout(obj2.func, 1500); // obj1이 출력됨
  var obj3 = { name: 'obj3' };
  var callback3 = obj1.func.call(obj3);
  setTimeout(callback3, 2000); // var로 선언된 프로퍼티로는 함수로 인식하지 못함

  // 예제 4-10 예제 4-8의 func 함수 재활용