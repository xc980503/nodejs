const fs = require('fs');
const http = require('http');
const url = require("url");
const path = require('path');
const data = require('./mock/data.json')

let app=http.createServer((req,res)=>{
    console.log(req.connection.remoteAddress)

    let{pathname,query}=url.parse(req.url,true);

    //默认加载首页
    if(pathname=='/'){
        res.end(fs.readFileSync('./public/index.html'));
    }

    //静态资源
    else if(path.extname(pathname)){
        res.end(fs.readFileSync(path.join('public', pathname)))
    }

    //登录接口
    else if(pathname == '/login'){
        let str = '';
        req.on('data', (chunk)=>{
            str += chunk;
        })
        //接受参数结束  str才有完整的值
        req.on('end', ()=>{
            //拿到的str转化成一个对象
            str = JSON.parse(str)
            //判断用户是否存在
            let isName = data.some(item=>{
                return item.name == str.name
            })
            if(!isName){
                res.end(JSON.stringify({code:0, msg:'用户不存在或者用户名错误'}))
            }
            //判断密码是否正确
            else{
                let isPwd = data.some(item=>{
                    return item.name==str.name && item.pwd == str.pwd
                })
                if(isPwd){
                    res.end(JSON.stringify({code:1, msg:'登录成功'}))
                }
                else{
                    res.end(JSON.stringify({code:0, msg:'密码错误'}))
                }
            }
        })

        
    }

    //注册接口
    else if(pathname == '/reg'){
        //判断用户是否已经被注册过
        let isName = data.some(item=>{
            return item.name == query.name
        })
        if(isName){
            res.end(JSON.stringify({ok:false, msg:'用户已存在'}))
        }
        else{
            data.push(query);
            //写入json数据
            fs.writeFileSync('./mock/data.json', JSON.stringify(data));
            res.end(JSON.stringify({ok:true, msg:'注册成功'}))
        }
    }
})

app.listen(8000,()=>{
    console.log("启动")
})


