export const b = 222;
let show = ()=>{
    console.log('aaaaaaaa')
}

// // exports  module.exports
// exports.b = b;
// exports.show = show

//es6
//1. export  自动组合成一个对象 可以用任意次
//2. export default 最多只能用一次  变量
export default show
// export {show}