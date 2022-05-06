function Person(name, gender) {
    this.name = name;
    this.gender = gender;
}
function Student(name, gender, school) {
    Person.call(this, name, gender); //Person의 name gender에 입력인자
    this.school = school;
}
function Employee(name, gender, company) {
    Person.apply(this, [name, gender]);
    this.company = company;
}
var by = new Student('보영', 'female', '단국대');
var jn = new Employee('재난', 'male', '구골');

console.log(by);
console.log(jn);

// 예제 3-21 call/apply 메서드의 활용 2) 생성자 내부에서 다른 생성자를 호출