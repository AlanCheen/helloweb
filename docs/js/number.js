/**
 * Created by mingjue on 2019/7/26.
 */


var a = 0.1
var b = 0.2

var c = a + b

console.log(0.1 + 0.2)

console.log(parseInt("0302"));

var result = isNaN(1);
var result2 = isNaN(NaN);

console.log(result, result2)

var result3 = 3 + NaN;
console.log(result3)

var result4 = 1/0;
console.log(result4)
var result5 = -1/0
console.log(result5)
console.log(isFinite(1))
console.log(isFinite(1/0))
console.log(isFinite(-1/0))
console.log(isFinite(Infinity))
console.log(isFinite(-Infinity))