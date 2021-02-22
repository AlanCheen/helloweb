/**
 * Created by mingjue on 2019/1/31.
 */


// = 用来赋值 ===严格相等运算符 ==相等运算  !==

// if else
var m = 3;

if (m === 3) {
    console.log('这是个三');
} else {
    console.log('这不是个三');
}

//类型转换 3 >0 转为true
if (m) {
    console.log('True');
}

//switch case

function testSwitch(value) {
    var result;
    switch (value) {

        case "a":
            result = 1;
            break;
        case 1:
            result = "a";
            break;
        default:
            result = '什么玩意';
            break;
    }
    console.log(result);
}

testSwitch('a');
testSwitch('1');
testSwitch(1);
testSwitch(null);
// 1
// 什么玩意
// a
// 什么玩意


var x = 1;

switch (x) {
    case true:
        console.log('x 发生类型转换');
        break;
    default:
        console.log('x 没有发生类型转换');
}
// x 没有发生类型转换


//while

var aaa =1;
while(aaa<4){
    aaa++;
    console.log("while:"+aaa);
}

//do...while 循环
var tmp =1;
do{
    console.log('do while :' + tmp);
    tmp++;
}while(tmp<5);

// do while :1
// do while :2
// do while :3
// do while :4

//label
for (var i = 0; i < 3; i++){
    for (var j = 0; j < 3; j++){
        if (i === 1 && j === 1) break; //只能跳出当前的一个循环
        console.log('i=' + i + ', j=' + j);
    }
}

// i=0, j=0
// i=0, j=1
// i=0, j=2
// i=1, j=0
// i=2, j=0
// i=2, j=1
// i=2, j=2

console.log("line break");

top:
    for (var i = 0; i < 3; i++){
        for (var j = 0; j < 3; j++){
            if (i === 1 && j === 1) continue top;  //跳出所有的循环了
            console.log('i=' + i + ', j=' + j);
        }
    }
// i=0, j=0
// i=0, j=1
// i=0, j=2
// i=1, j=0
// i=2, j=0
// i=2, j=1
// i=2, j=2