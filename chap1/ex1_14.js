var copyObject = function (target) {
    var result = {};
    for (var prop in target) { // for의 조건문이 약간 이해가 안됐는데, 타켓 객체 안의 모든 프로퍼티를 다 일컫는 구문인 것이라고 판단했습니다.
        result[prop] = target[prop];
    }
    return result;
}; // 외부의 함수를 가져다 쓰는 법을 몰라서 일단은 그대로 코드를 복사해 왔습니다.

var user = {
    name: 'Jeanam',
    urls: {
        portfolio: 'http://github.com/abc',
        blog: 'http://blog.com',
        facebook: 'http://facebook.com/abc'
    }
};
var user2 = copyObject(user); // 새로운 주소를 갖는 user와 동일한 프로퍼티의 객체 선언 및 지정

user2.name = 'Jung'; // 주솟값은 변하지 않지만 이미 기존의 user와 다른 주소를 가지므로 문제없음
console.log(user.name === user2.name);

user.urls.portfolio = 'http://portfolio.com';
console.log(user.urls.portfolio === user2.urls.portfolio);

user2.urls.blog = '';
console.log(user.urls.blog === user2.urls.blog);

// 예제 1-14 중첩된 객체에 대한 얕은 복사

// 참조형 객체 내부에 또 참조형의 객체가 존재하므로, 얕은 복사로는 22 - 23 , 25 - 26에서 결과가 같음

// urls의 주소는 여전히 동일하기 때문