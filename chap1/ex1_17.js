var copyObjectDeep = function(target) {
    var result = {};
    if (typeof target === 'object' && target !== null) {
        for (var prop in target) {
            result[prop] = copyObjectDeep(target[prop]); //내부의 참조형 객체에 대해서도 새로운 주소 부여
        }
    }
    else {
        result = target;
    }
    return result;
};

var obj = {
    a: 1,
    b: {
        c: null,
        d: [1, 2]
    }
};
var obj2 = copyObjectDeep(obj);

obj2.a = 3;
obj2.b.c = 4;
obj.b.d[1] = 3;

console.log(obj);
console.log(obj2);

console.log(obj.b);
console.log(obj2.b);
console.log(obj.b.d);
console.log(obj2.b.d);

// 예제 1-17 깊은 복사 결과 확인

// 결과가 책의 내용과는 약간 다릅니다...

// 일일이 프로퍼티를 확인하면 잘 나타나긴 합니다만, obj와 obj2를 로그로 보면 객체를 다 보여주질 않습니다