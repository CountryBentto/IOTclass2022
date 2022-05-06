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

// 예제 1-16 객체의 깊은 복사를 수행하는 범용 함수
