// console.log(sum(3, 4)); //에러

var sum = function (x, y){
    return x + y;
};

var a = sum(1, 2);

var sum = function (x, y){
    return x + '+' + y + '=' + (x+y);
};

var c = sum(1, 2);
console.log(a); // 3
console.log(c); // '1+2=3'

// 예제 2-12 상대적으로 함수 표현식이 안정함을 나타내는 코드