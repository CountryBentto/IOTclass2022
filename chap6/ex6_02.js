var Constructor = function(name) {
    this.name = name;
  };
  Constructor.prototype.method1 = function() {};
  Constructor.prototype.property1 = 'Constructor Prototype Property';
  
  var instance = new Constructor('Instance');
  console.dir(Constructor);
  console.dir(instance);

  // 예제 6-2 prototype과 __proto__