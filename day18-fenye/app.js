const express = require('express');
let  data = require('./mock/data.json')
let  list = data.list;

let app = new express();

app.use(express.static('public'));

app.use(express.urlencoded({extended:false}));
app.use(express.json())

//渲染下标
app.get('/getIndex', (req, res)=>{
    let num = Math.ceil(list.length/req.query.page);
    res.send({num})
})

//首页渲染
app.get('/getFirst', (req, res)=>{
    let newdata = list.slice(0, req.query.page);
    res.send(newdata)
})

//点击相应的下标渲染不同数据
app.post('/getlist', (req, res)=>{
    console.log(req.body)
    let {page, index} = req.body
    // 4 inde:3  截取 16-20    15
    let newdata = list.slice(page*index, (index+1)*page);
    console.log(newdata);
    // console.log(data)
    res.send(newdata)
})

app.listen(8000, ()=>{
    console.log('port on 8000')
})