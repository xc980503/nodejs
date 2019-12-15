//1.加载依赖
const express = require('express');
const path = require('path');
// const data = require('./mock/data.json');
const fs = require('fs')

//2.创建
let app = new express();

// app.get('/', (req, res)=>{
//     // res.sendFile()  路径必须是绝对路径
//     res.sendFile(path.join(__dirname, './public/test.html'))
// })

//加载静态资源
app.use(express.static('public'))

//配置post请求接收参数
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json())

app.get('/getdata', (req, res) => {
    console.log('get请求');
    console.log(req.query);
    res.send();
})

app.all('/getdata', (req, res, next)=>{
    console.log('all接收');
    next();
})

app.post('/getdata', (req, res, next) => {
    console.log('post请求');
    console.log(req.body);
    next();
})

app.post('/getdata', ()=>{
    console.log('多次处理')
})



app.get('/getlist', (req, res) => {
    let data = JSON.parse(fs.readFileSync('./mock/data.json'))

    res.send(data)
})



app.get('/del', (req, res) => {
    let data = JSON.parse(fs.readFileSync('./mock/data.json'))
    let arr = JSON.parse(req.query.obj).arr
    // console.log(obj);
    // console.log(typeof(obj))
    let arr2 = []; //唯一标识 name
    arr.forEach(item => { //下标
        arr2.push(data[item].title)
    });
    console.log(arr2)
    let newData = data.filter(item => { //过滤掉已经在前端选中要删除的数据
        return !arr2.includes(item.title)
    })
    console.log(newData)
    data = newData
    fs.writeFileSync('./mock/data.json', JSON.stringify(data));
    res.end(JSON.stringify(newData))

})



// app.post()

//3.监听
app.listen(8000, () => {
    console.log('run at 8000')
})