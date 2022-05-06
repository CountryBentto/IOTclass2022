console.log(sum(1,2));
console.log(multiply(3,4));

function sum (a,b){
    return a + b;
}

var multiply = function (a,b){ // 함수로 선언되지 않음
    return a * b;
}
// 예제 2-9 함수 선언문과 함수 표현식 (1) - 원본 코드