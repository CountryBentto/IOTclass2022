var count = 0;
var timer = setInterval(function() {
  console.log(count);
  if (++count > 4) clearInterval(timer);
}, 300);

// 예제 4-1 콜백 함수 예제(1-1) setInterval