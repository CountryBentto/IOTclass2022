var Grade = function() {
    var args = Array.prototype.slice.call(arguments);
    for (var i = 0; i < args.length; i++) {
      this[i] = args[i];
    }
    this.length = args.length;
  };
  var g = new Grade(100, 80);

  // 예제 6-10 Grade 생성자 함수와 인스턴스