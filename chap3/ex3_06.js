var func = function (x) {
    console.log(this, x);
    console.log(this);
    console.log(x);
 };
//  func(1);
 //global {global: global, clearInterval: ƒ, clearTimeout: ƒ, setInterval: ƒ, setTimeout: ƒ, …} 1

 var obj = {
     method: func
 };
 obj.method(2); //{method: ƒ} 2


 // 예제 3-6 함수로서 호출, 메서드로서 호출