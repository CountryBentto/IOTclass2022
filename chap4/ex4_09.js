var obj1 = {
    name: 'obj1',
    func: function() {
      console.log(obj1.name);
    },
  };
  setTimeout(obj1.func, 1000);

  // 예제 4-9 콜백 함수 내부에서 this를 사용하지 않은 경우