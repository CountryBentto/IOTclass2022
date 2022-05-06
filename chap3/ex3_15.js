var obj = {
    a: 1,
    method: function (x, y) {
        console.log(this.a, x, y);
    }
};

obj.method(2, 3);
obj.method.call({ a: 4 }, 5, 6); // this가 { a: 4 }가 되었으므로 this.a === 4

// 예제 3-15 call 메서드(2)