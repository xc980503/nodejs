//es5
//1.可以被重复定义
//2.变量提升
//3.没有块极作用域
// console.log(str)
// var a = 1;
// var str = 'hello';
// var a = 2;
// console.log(a);
// if(true){
//     var b = 34
// }
// console.log(b)

//es6
//let
//1.不能被重复定义
//2.没有变量提升
//3.有块极作用域
// console.log(aa)
let aa = 1;
aa = 2;
// console.log(aa)
//const
//1.不能被重复定义
//2.定义的变量不能被修改(定义的对象的属性值除外)
//3.有块极作用域
const bb = 3;
// bb = 4;
const PI = 3.1415926;
console.log(bb);
const obj = {
    name:'10b',
    age:1
}
obj.name = '10bbbb';
console.log(obj)
if(true){
        let ccc = 34
    }
console.log(ccc)