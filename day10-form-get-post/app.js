const http = require("http");
const fs = require("fs");
const path = require('path');
const url = require('url');
const queryString = require('querystring')

let app = http.createServer((req,res)=>{
    //设置请求头
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    // url.parse()   把地址栏内容解析成一个对象
    //解构赋值pathname
    let {pathname, query} = url.parse(req.url, true)

    // 首页
    if(req.url == '/'){
        res.end(fs.readFileSync('./public/index.html'))
    }
    //加载静态资源
    else if(path.extname(pathname)){
       res.end(fs.readFileSync(path.join('public', pathname))) 
    }
    else if(pathname == '/form'){
        // console.log(query)  query接收get请求传过来的参数
        let str = ''
        req.on('data', (chunk)=>{
            str += chunk
        })
        req.on('end', ()=>{
            console.log(queryString.parse(str))
        })
        res.end('服务器收到请求')
    }
    else if(pathname == '/my'){
        console.log(query)
        res.end('接收到ajax请求~~~~~~~~~~~~~');
    }
    //处理get接口
    else if(pathname == '/get'){
        console.log(query)
        res.end('接收到axios get请求发送的数据')
    }
    //处理post请求
    else if(pathname == '/post'){
        let str = ''
        req.on('data', (chunk)=>{
            str += chunk
        })
        req.on('end', ()=>{
            console.log(JSON.parse(str))
        })
        res.end('接收到axios post请求发送的数据')
        
    }
})

app.listen(1210,()=>{
    console.log("加载中")
})