const express = require('express')
const fs = require('fs');
const path = require('path');
let data = require('./mock/data.json');
const bodyparser = require('body-parser')

let app = new express();

//静态资源
app.use(express.static('public'));

//处理post请求接收参数  方式1 
// app.use(express.urlencoded({extended:false}));
// app.use(express.json())

//处理post请求接收参数  方式2   npm i body-parser
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());


//首页数据渲染请求处理
app.get('/getdata', (req, res)=>{
    res.send(data);
})

//详情页数据处理
app.get('/getdetail', (req, res)=>{
    // console.log(req.query)
    let id = req.query.index;  //后台拿到下标
    let newdata = data[id];   //拿到详情页的数据
    res.send(newdata)
})

//删除处理
app.post('/del', (req, res)=>{
    // console.log(req.query)
    // console.log(req.body)
    data.splice(req.body.index, 1);   //删除json中原有的数据
    fs.writeFileSync('./mock/data.json', JSON.stringify(data))  //重新写入
    res.send('删除成功')
})

//模糊搜索
app.get('/search', (req, res)=>{
    // req.query.word
    let newdata = data.filter((item)=>{
        return item.title.includes(req.query.word) || item.autor.includes(req.query.word)
    })
    res.send(newdata)
})

//加入书架改变json数据里flag的值
app.get('/add', (req, res)=>{
    //判断是否已经添加到书架中
    if(data[req.query.index].flag == 1){
        res.send('已在书架中')
    }
    else{
        data[req.query.index].flag = 1;
        fs.writeFileSync('./mock/data.json', JSON.stringify(data));
        res.send('添加成功')
    }
})

//我的书架页内容渲染
app.get('/getMyBook', (req, res)=>{
    //获取到书架页的内容
    let mybook = data.filter(item=>{
        return item.flag==1
    })
    res.send(mybook)
})

app.listen(3000, ()=>{
    console.log('port on 3000')
})