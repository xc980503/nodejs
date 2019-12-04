const a = 1;
const b = ()=>{
    console.log('bbbb')
}

//抛出
// //1. exports  aa表示抛出以后引用时的变量名， a表示你要抛出的那个变量（可以相同）
// exports.aa = a;
// exports.bb = b;

//2. moudle.exports 直接以对象形式来抛出
module.exports = {
    a,
    b
}