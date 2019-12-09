//1.引入内置模块
const http = require('http');
const fs = require('fs')

//2.创建一个服务器
let app = http.createServer((request, response)=>{
    //request表示请求对象
    //response响应对象
    console.log(request.url)
    //加载首页
    if(request.url == '/' || request.url == '/index.html'){

    //response.end()  响应结束 end()只能返回string，buffer
    response.end(fs.readFileSync('./index.html'))
    }
    //加载style.css
    else if(request.url == '/style.css'){
        response.end(fs.readFileSync('./style.css'))
    }
    //加载index.js
    else if(request.url =='/index.js'){
        response.end(fs.readFileSync('./index.js'))
    }

})

//3.设置监听 端口号
app.listen(8000, ()=>{
    console.log('服务已经启动在8000端口上')
})
