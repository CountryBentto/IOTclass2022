var user = {
    name: 'Jeanam',
    gender: 'male'
};

var changeName = function (user, newName) {
    var newUser = user;
    newUser.name = newName;
    return newUser;
};

var user2 = changeName(user, 'Jung'); // user가 참조하는 주소는 같고 함수로 인해서 참조하는 주소에 쓰인 참조 주소가 동일하게 변경됨.

if (user !== user2) {
    console.log('유저 정보가 변경되었습니다.');
}
console.log(user.name, user2.name);
console.log(user === user2);

// 예제 1-10 객체의 가변성에 따른 문제점
// 12 행을 실행하면 user와 user2는 둘 다 참조형 자료이므로 같은 주소를 참조하게 되고, 해당 주소에서 참조하는 자료의 주소를 새로 할당, user와 user2 자체는 같은 주소를 참조하므로 기존의 자료가 유지되지않음