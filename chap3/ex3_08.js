var obj = {
    methodA: function () { console.log(this); },
    inner: {
        methodB: function () { console.log(this); }
    }
};
obj.methodA();
obj['methodA']();

obj.inner.methodB();
obj.inner['methodB']();
obj['inner'].methodB();
obj['inner']['methodB'](); // 밑에 4개는 다 같은 표현

// 예제 3-8 메서드 내부에서의 this