var user = {
    name: 'Jaenam',
    gender: 'male'
};

var changeName = function (user, newName) {
    return {
        name: newName,
        gender: user.gender
    };
};

var user2 = changeName(user, 'Jung');

if (user !== user2) {
    console.log('유저 정보가 변경되었습니다.');
}
console.log(user.name, user2.name);
console.log(user === user2);

// 예제 1-11 객체의 가변성에 따른 문제점의 해결 방법

// 자료 자체를 새로 정의하면 참조형 자료가 참조하는 주소가 바뀐다고 이전 예제에서 학습한 바 있음. 따라서 함수를 객체의 프로퍼티 변경을 하지 않고 객체 자체를 지정해주면 기존의 자료를 보존 가능