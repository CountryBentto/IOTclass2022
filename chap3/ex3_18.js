function a () {
    var argv = Array.prototype.slice.call(arguments);
    argv.forEach(function (arg) {
        console.log(arg);
    });
}
a(1, 2, 3);

document.body.innerHTML = '<div>a</div><div>b</div><div>c</div>';  // document를 못받음
var nodeList = document.querySelectorAll('div');
var nodeArr = Array.prototype.slice.call(nodeList);
nodeArr.forEach(function (node) {
    console.log(node);
});

// 예제 3-18 call/apply 메서드의 활용 1-2) arguments.NodList에 배열 메서드를 적용