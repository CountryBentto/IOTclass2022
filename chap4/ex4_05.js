Array.prototype.map = function(callback, thisArg) {
    var mappedArr = [];
    for (var i = 0; i < this.length; i++) {
      var mappedValue = callback.call(thisArg || window, this[i], i, this);
      console.log(mappedValue);
      mappedArr[i] = mappedValue;
    }
    return mappedArr;
  };
  // console.log(thisArg);
// console.log(mappedArr);
// console.log(this);
// 예제 4-5 콜백 함수 예제 (2-3) Array.prototype.map - 구현