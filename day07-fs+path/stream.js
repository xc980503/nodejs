const fs = require('fs')
//流读取和写入
// 24.fs.createReadStream(path[, options]) 创建一个读取流
// 25.fs.createWriteStream(path[, options]) 创建一个写入流

let rs = fs.createReadStream('./mp3/好运来.mp3');
let ws = fs.createWriteStream('./mp3/b.mp3');
rs.pipe(ws)

//读取中
// let str = '';
// let num = 0
// rs.on('data', (chunk)=>{
//     //chunk表示每次读取的内容
//     str += chunk;
//     num++;
//     console.log('第'+num+"次读取");
// })


// //读取结束
// rs.on("end", ()=>{
//     console.log('流读取结束');
//     // console.log(str)
//     ws.write(str);
//     ws.end();
//     ws.on('finish', ()=>{
//         console.log('写入结束')
//     })
// })