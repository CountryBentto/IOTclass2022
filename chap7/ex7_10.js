var Rectangle = function(width, height) {
    this.width = width;
    this.height = height;
  };
  Rectangle.prototype.getArea = function() {
    return this.width * this.height;
  };
  var Square = function(width) {
    Rectangle.call(this, width, width);
  };
  Square.prototype = Object.create(Rectangle.prototype);
  Object.freeze(Square.prototype);
  
  var sq = new Square(5);
  console.log(sq.getArea()); // 25

  // 예제 7-10 클래스 상속 및 추상화 방법(3) - Object.create 활용