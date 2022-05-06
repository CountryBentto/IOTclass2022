var str = 'abc def';

// Array.prototype.push.call(str, ', pushed string'); // 에러 발생문


Array.prototype.concat.call(str, 'string');

Array.prototype.every.call(str, function(char) { return char !==' '; });

Array.prototype.some.call(str, function(char) { return char !==' '; });

var newArr = Array.prototype.map.call(str, function(char) { return char + '!'; });
console.log(newArr);

var newstr = Array.prototype.map.call(str, [
    function(string, char, i) { return string + char + i; },
    ''
]);
console.log(newStr);

// 예제 3-19 call/apply 메서드의 활용 1-3) 문자열에 배열 메서드 적용 예시

// Uncaught TypeError TypeError: [object Array] is not a function 이라는 원인불명 에러 발생