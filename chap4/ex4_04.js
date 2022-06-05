var newArr2 = [10, 20, 30].map(function(index, currentValue) {
    console.log(index, currentValue);
    return currentValue + 5;
  });
  console.log(newArr2);
  
  // -- 실행 결과 --
  // 10 0
  // 20 1
  // 30 2
  // [5, 6, 7]

  // 예제 4-4 콜백 함수 예제 (2-2) Array.prototype.map - 인자의 순서를 임의로 바꾸어 사용한 경우