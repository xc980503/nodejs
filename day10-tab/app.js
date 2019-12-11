const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path')

let app = http.createServer((req, res)=>{
    //解构赋值
    let {pathname, query} = url.parse(req.url, true);

    //处理favicon.ico
    if(pathname == '/favicon.ico'){
        res.end();
        return;
    }
    //配置  /
    else if(pathname == '/'){
        res.end(fs.readFileSync('./public/index.html'))
    }
    //静态资源
    else if(path.extname(pathname)){
        res.end(fs.readFileSync(path.join('public', pathname)))
    }
    //getHead  处理导航栏接口
    else if(pathname == '/getHead'){
        //拿到数据内容
        let data = fs.readFileSync('./mock/data.json');
        //结束响应并把内容返回给前端
        res.end(data)
    }
    //getImg   处理主体内容图片接口
    else if(pathname == '/getImg'){
        let data = JSON.parse(fs.readFileSync('./mock/data.json'));
        // console.log(query.index) 前端传过来的点击那个li标签的标识
        //获取相应下标的图片地址
        let imgSrc = data[query.index].src;
        res.end(imgSrc)
    }

    
})

app.listen(3000, ()=>{
    console.log('run at 3000')
})