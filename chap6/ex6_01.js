var Person = function(name) {
    this._name = name;
  };
  Person.prototype.getName = function() {
    return this._name;
  };

var suzi = new Person('Suzi');
console.log(suzi.__proto__.getName());
console.log(Person.prototype === suzi.__proto__);
console.log(suzi.__proto__);
suzi.__proto__._name = 'SUZI__proto__';
console.log(suzi.__proto__.getName());
console.log(suzi.getName()); //생략 가능
  // 예제 6-1 Person.prototype