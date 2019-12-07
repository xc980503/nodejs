const fs = require('fs');
const path = require('path');
const data = require('./data.json');

let createDir = (obj)=>{ //obj是个对象
    //判断外层文件夹是否存在
    if(!fs.existsSync(obj.name)){
        fs.mkdirSync(obj.name);  //item  views   src/views
    }
    //遍历
    obj.children.forEach(item=>{  //['views', 'utils'] item也是一个对象
        //获取子元素的路径
        item.name = path.join(obj.name, item.name);
        // let arr = item.name.toString().split('\\');
        let text = item.name.toString().replace(/\\/g, '>')      
        //判断子元素是文件还是文件夹
        if(item.type == 'file'){
            //文件
            fs.writeFileSync(item.name, text)
        }else{
            //文件夹 递归调用
            createDir(item)
        }
    })
}

createDir(data)
