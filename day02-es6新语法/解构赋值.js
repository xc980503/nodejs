//es5
// var a = 1,
//     b = 2,
//     c = 3;l
// console.log(a, b, c)

//es6
//数组  位置上一一对应 推荐类型一致
let [a, b, c, d] = [1, null, 'hello', true, NaN]
console.log(a, b, c, d);

//对象 属性上一一对应
let obj = {
    name: 'xc', 
    age: 19,
    level: 8
}
let {age, name, level} = obj
console.log(name, age)