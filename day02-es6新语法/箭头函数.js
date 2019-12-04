//es5
// function 函数名 (参数){
//     ...函数体
// }
// var 函数名 = function{
//     ...函数体
// }

//es6
//1.省略掉了function关键字
//2.多了一个箭头
//3.如果函数体只有一句话，花括号可以省略，并且默认加上return
//4.如果参数有且只有一个,可以省略小括号
// let add = (a, b)=>{
//     return(a+b)
// }
let add = (a, b)=>(a+b);
let arr = [1,3,5,5,6,6]
arr.forEach(item=>{
    console.log(item)
})

 
console.log(add(1,34))