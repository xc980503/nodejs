const fs = require('fs')

// 1.fs.readFile(path[, options], callback)  异步读文件
// fs.readFile('./a.txt', 'utf8', (err, data)=>{
//     //err表示读写错误的错误信息
//     //data表示读取正确的内容
//     if(err){
//         console.log(err);
//     }else{
//         // console.log(data.toString())
//         console.log(data)
//     }
// })
// fs.readFile('./b.js', 'utf8', (err,data)=>{
//     if(err){
//         console.log(err);
//     }else{
//         // console.log(data.toString())
//         console.log(data)
//     }
// })

// 2.fs.readFileSync(path[, options])  同步读文件
// let data1 = fs.readFileSync('./a.txt')
// console.log(data1.toString())
// let data2 = fs.readFileSync('./c.html')
// console.log(data2.toString())

//3.fs.writeFile(file, data[, options], callback) 覆盖式异步写入文件
// fs.writeFile('style.css', '*{padding:0}', (err, data)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("写入结束")
//         let a=fs.readFileSync('./style.css');
//         console.log(a.toString())
//     }
// })
// console.log('写入成功')

//4. fs.writeFileSync(file, data[, options])  覆盖式同步写入文件
// fs.writeFileSync('a.txt', 'aaaaaaaaa');
// console.log('写入结束')

// 5.fs.appendFile(path, data[, options], callback)   添加式异步写文件
fs.appendFile('b.js', 'const b = 2',(err, data)=>{

})

// 6.fs.appendFileSync(path, data[, options])  添加式同步写文件
// fs.appendFileSync('a.txt', 'bbbbbbbbbbbb')

// 7.fs.readdir(path[, options], callback) 异步读文件夹
// 8.fs.readdirSync(path[, options])  同步读文件夹 
//返回一个数组 存放当前这个文件夹下一级目录的文件或文件夹信息
// let a = fs.readdirSync('root');
// console.log(a)


// 9.fs.mkdir(path[, options], callback) 异步创建一个文件夹
// 10.fs.mkdirSync(path[, options])  同步创建文件夹
// fs.mkdirSync('./src')
// fs.mkdirSync('./src/dist')
// fs.mkdirSync('./src/dist/abc')

// 11.fs.unlink(path, callback)  异步删文件
// 12.fs.unlinkSync(path)  同步删文件
// fs.unlinkSync('a.txt')

// 13.fs.rmdir(path, callback)  异步删除空文件夹
// 14.fs.rmdirSync(path[, options]) 同步删除空文件夹
// fs.rmdirSync('src/dist/abc')

// 15.fs.copyFile(src, dest[, flags], callback)  异步拷贝文件
// 16.fs.copyFileSync(src, dest[, flags])  同步拷贝文件
// fs.copyFileSync('./b.js', './c.js')

// 17.fs.stat()  返回一个对象 查看状态
// 18.fs.statSync() 返回一个对象(查看的文件或文件夹)
// let obj = fs.statSync('src');
// console.log(obj)

// 19.fs.statSync().isFile()  判读是否是一个文件 返回一个布尔值
// let flag = fs.statSync('b.js').isFile();
// let flag = fs.statSync('src').isFile();
// console.log(flag)
// 20.fs.statSync().isDirectory()  判读是否是一个文件夹
// let flag1 = fs.statSync('b.js').isDirectory();
// let flag2 = fs.statSync('src').isDirectory();
// console.log(flag1, flag2)  //false true

// 21.fs.rename(oldPath, newPath, callback)  异步重命名
// 22.fs.renameSync(oldPath, newPath) 同步重命名
// fs.renameSync('b.js', 'bbbbbbb.js')

// 23.fs.existsSync(path) 判断路径是否存在
let flag1 = fs.existsSync('a.js');
let flag2 = fs.existsSync('c.js');
console.log(flag1, flag2) //false true


