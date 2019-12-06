//引入内置模块
const fs = require('fs');
const initSize = 1 * 1024 * 1024   //B

let fn = (path, dist)=>{
    //判断路径是否存在
    if(!fs.existsSync(path)){
        return;
    }
    else{
        //获取文件的信息
        if(fs.statSync(path).size<=initSize){
            //小文件
            console.log('现在开始拷贝小文件');
            fs.copyFileSync(path, dist);
            console.log('小文件拷贝完成')
        }
        else{
            //大文件
            console.log('现在开始拷贝大文件');
            let rs = fs.createReadStream(path);
            let ws = fs.createWriteStream(dist);
            rs.pipe(ws);
            console.log('大文件拷贝完成')
        }
    }
}

// fn('a.txt', 'aaaa.txt')
fn('./mp3/a.mp3', './mp3/4am.mp3')