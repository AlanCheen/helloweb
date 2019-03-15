/**
 * Created by mingjue on 2019/1/31.
 */


// 注意：区块 对 var 命令不构成单独的作用域，既 在单独的区块里用 var 声明的 在其他区块还能用
{
    var a = 1;
    console.log(a);
}

a = 2;
console.log(a);

//输出 1 2