function show(num,time){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            console.log(num)
            res(num)
        },time)
    })
}
// show(1, 2000).then((data)=>{
//     console.log(data)
// })
// show(2, 2000).then((data)=>{
//     console.log(data)
// })
// async function a(){
    //同步打印
//     await show(1, 3000);
//     await show(2, 3000)
// }
// a()

async function b(){
    // 异步打印
    let s1 =  show(1, 3000);
    let s2 =  show(2, 3000);
    await s1;
    await s2;
}
b()
