setTimeout(function () { console.log(this); }, 300);

[1, 2, 3, 4, 5].forEach(function (x) {
    console.log(this, x);
});
// var document = {
//     body: {},
//     innerHTML: {}
// }

document.body.innerHTML += '<button id="a">클릭</button>';
document.body.querySelector('#a')
    .addEventListener('click', function (e) {
        console.log(this, e);
    });


// 예제 3-12 콜백 함수 내부에서의 this

// 손을 써보았는데 document가 내장 객체로 되어있는것 같지 않습니다.
