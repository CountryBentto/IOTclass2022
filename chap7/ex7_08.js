var extendClass1 = function(SuperClass, SubClass, subMethods) {
    SubClass.prototype = new SuperClass();
    for (var prop in SubClass.prototype) {
      if (SubClass.prototype.hasOwnProperty(prop)) {
        delete SubClass.prototype[prop];
      }
    }
    if (subMethods) {
      for (var method in subMethods) {
        SubClass.prototype[method] = subMethods[method];
      }
    }
    Object.freeze(SubClass.prototype);
    return SubClass;
  };
  var Square = extendClass1(Rectangle, function(width) {
    Rectangle.call(this, width, width);
  });
////////////////////////////////////////////////////////
var Rectangle = function(width, height) {
    this.width = width;
    this.height = height;
  };
  Rectangle.prototype.getArea = function() {
    return this.width * this.height;
  };
  var Square = extendClass1(Rectangle, function(width) {
    Rectangle.call(this, width, width);
  });
  var Bridge = function() {};
  Bridge.prototype = Rectangle.prototype;
  Square.prototype = new Bridge();
  Object.freeze(Square.prototype);

  // 예제 7-8 클래스 상속 및 추상화 방법(1) - 인스턴스 생성 후 프로퍼티 제거