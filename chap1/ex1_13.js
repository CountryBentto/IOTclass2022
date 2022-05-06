var user = {
    name: 'Jeanam',
    gender: 'male'
};

var user2 = copyObject(user); // 카피 함수를 이전 예제에서 모든 프로퍼티를 복사한 새로운 객체를 만드는 함수로 정의함.
user2.name = 'Jung';

if (user !== user2) {
    console.log('유저 정보가 변경되었습니다.');
}
console.log(user.name, user2.name);
console.log(user === user2);

// 예제 1-13 copyObject를 이용한 객체 복사
// 6행의 함수 사용은 오로지 새로운 객체를 얻어내어 객체가 별도의 주소값을 갖도록 하는 것에 의의가 있음.