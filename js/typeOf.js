/**
 * Created by mingjue on 2019/1/31.
 */

var n = typeof 123;
console.log(n)//number

var s = typeof 'hello';
console.log(s);//string

var b = typeof false;
console.log(b);//boolean

function f(){}
var f1 = typeof f;
console.log(f1);//function

console.log(typeof undefined);// "undefined"

console.log(typeof {});
console.log(typeof []);
console.log(null);


typeof 123;//number
typeof 'hello';//string
typeof false;//boolean
typeof (function f(){})//function
typeof undefined;//undefined
typeof null; // "object"
typeof window // "object"
typeof {} // "object"
typeof [] // "object"
typeof null//"object" ==> "null"  历史原因