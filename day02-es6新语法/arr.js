// let arr = [1, 3, 5, 7, 7, 9, 0]

// //arr.find() 返回数组里符合条件的第一项
// // 如果有，返回符合条件的第一项
// // 如果没有， 返回undefined
// let flag = arr.find(item=>{
//     return item > 9
// })
// console.log(flag)

// //arr.findeIndex() 返回数组里符合条件的第一项的下标
// // 如果有，返回符合条件的第一项的下标
// // 如果没有， 返回-1
// let flag2 = arr.findIndex(item=>{
//     return item > 10
// })
// console.log(flag2)

// //arr.includes() 返回的是一个布尔值
// let flag3 = arr.includes(3);
// console.log(flag3);

//arr.flat() 数组拉平 只能在游览器环境中运行
let arr2 = [1, 3, [4, 5, [3, 2], 6]]
arr2.flat()