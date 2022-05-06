var obj = {
    method: function (x) { console.log(this, x); }
};
obj.method(1);  //메서드 호출 case 1
obj['method'](2);   //메서드 호출 case 2

// 예제 3-7 메서드로서 호출 - 점 표기법, 대괄호 표기법