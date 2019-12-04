// //promise  es6解决异步编程的方式
// //三种状态  pending进行时   成功  失败
// //创建一个promise实例
// let p1 = new Promise((resolve, reject)=>{
//     //resolve  表示成功
//     //reject 表示失败
//     console.log('p1');
//     // ... 

//     resolve('suc')
//     // reject('err');
// })
// // .then() 跟两个回调函数作为参数，并且只会执行其中的一个
// //并且如果是resolve状态 ，后面那个callback可以省略
// let p2 = new Promise((res, rej)=>{
//     console.log("p2");
//     res('suc2222')
//     // rej('p2err')
// })
// p1.then((data)=>{
//     //resolve
//     // console.log('成功了');
//     console.log(data)
// }, (err)=>{
//     //reject
//     console.log('失败了');
//     console.log(err)
// })
// p2.then((data)=>{
//     console.log(data)
// })

const p1 = Promise.resolve('1111')
const p2 = Promise.resolve('2222')
const p3 = Promise.resolve('3333')



// Promise.all()  返回值还是一个promiese实例对象
// 都成功的时候给我们返回的是成功， 只要有一个失败了，他就是reject
Promise.all([p1, p2, p3]).then((data)=>{
    //data是一个数组，接收resolve
    console.log('all成功')
    console.log(data)
}, (err)=>{
    //返回第一个失败的位置的返回值
    console.log('all失败了');
    console.log(err)
})