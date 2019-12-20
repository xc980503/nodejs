const express = require('express');
let  data = require('./mock/data.json')
let  list = data.list;
const fs = require('fs')

let app = new express();

//静态资源
app.use(express.static('public'));

app.use(express.urlencoded({extended:false}));
app.use(express.json())

//首页
app.get('/getdata', (req, res)=>{
    res.send(list)
})

//排序
app.get('/sort', (req, res)=>{
    list.sort((a, b)=>{
        return new Date(a.lastTime).getTime() -new Date(b.lastTime).getTime()
    });
    res.send(list)
})

//修改原始数据渲染
let id = 0
app.get('/getEdit', (req, res)=>{
    id = req.query.id;
    let newdata = list[req.query.id];
    res.send(newdata)
})

//编辑确定修改
app.post('/edit', (req, res)=>{
    list.splice(id, 1, req.body);
    fs.writeFileSync('./mock/data.json', JSON.stringify(data));
    res.send('修改成功')
})

//模糊搜索
app.get('/search', (req, res)=>{
    // req.query.word  搜索的关键字
    let newdata = list.filter(item=>{  //对象
        return  item.ym.includes(req.query.word)
    })
    res.send(newdata)
})


app.listen(8000, ()=>{
    console.log('port on 8000')
})