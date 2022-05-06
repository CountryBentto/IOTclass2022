console.log(sum(3,4));

function sum (x,y) {
    return x + y;
}

var a = sum(1, 2);

function sum (x,y){  // 호이스팅을 거치면 함수선언이 최우선 처리되므로 두 함수를 중복해선 안된다는 의미
    return x+ '+' + y + '=' + (x+y);
}

var c = sum(1, 2);
console.log(c)
console.log(c === 3)  // char & int, false

// 예제 2-11 함수 선언문의 위험성