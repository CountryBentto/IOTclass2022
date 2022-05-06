var copyObject = function (target) {
    var result = {};
    for (var prop in target) { // for의 조건문이 약간 이해가 안됐는데, 타켓 객체 안의 모든 프로퍼티를 다 일컫는 구문인 것이라고 판단했습니다.
        result[prop] = target[prop];
    }
    return result;
};

// 예제 1-12 기존 정보를 복사해서 새로운 객체를 반환하는 함수 (얕은 복사)
// 참조형 자료가 담는 프로퍼티가 많을 수록 함수의 설정이 복잡해짐을 해결하기 위해서 기존의 프로퍼티를 그대로 복사하는 함수