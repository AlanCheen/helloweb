/**
 * Created by mingjue on 2019/4/26.
 */

//
// 命名变量
// 变量名需要遵守两条简单的规则：
//
// 第一个字符必须是字母、下划线（_）或美元符号（$）
// 余下的字符可以是下划线、美元符号或任何字母或数字字符

var tes = "It's a variable";

var a = "a",b=1,c,d="test";

//可以动态变
tes = 66;

var t;
var $t;
var $1;
var _adf_;

// var 1f;//wrong
// var %23d;

//不声明的 会用该变量名创建一个全局变量
e = "555"
console.log(e)