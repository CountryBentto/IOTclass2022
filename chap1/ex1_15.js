var copyObject = function (target) {
    var result = {};
    for (var prop in target) { 
        result[prop] = target[prop];
    }
    return result;
};
var user = {
    name: 'Jeanam',
    urls: {
        portfolio: 'http://github.com/abc',
        blog: 'http://blog.com',
        facebook: 'http://facebook.com/abc'
    }
};

var user2 = copyObject(user);
user2.urls = copyObject(user.urls); //이전에서 한 작업과 마찬가지로 내부의 참조형 자료에 대해서도 카피

user.urls.portfolio = 'http://portfolio.com';
console.log(user.urls.portfolio === user2.urls.portfolio);

user2.urls.blog = '';
console.log(user.urls.blog === user2.urls.blog);

// 예제 1-15 중첩된 객체에 대한 깊은 복사


