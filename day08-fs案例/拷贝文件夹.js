const fs = require('fs');
const path  = require('path');

class copyDir{
    //构造函数
    constructor(src, dist){
        this.src = src;
        this.dist = dist;
        this.copy();
    }
    copy(){
        //判断要拷贝的文件夹是否存在
        if(!fs.existsSync(this.src)){
            return;
        }else{
            //判断拷贝后的文件夹是否存在
            if(!fs.existsSync(this.dist)){
                fs.mkdirSync(this.dist);
            }
            //读要拷贝文件夹的内容
            let childs = fs.readdirSync(this.src); //a['add', 'sdd']
            childs.forEach(item=>{
                //拼接子文件的正确路径
                let childPath = path.join(this.src, item)
                let childDist = path.join(this.dist, item)
                //判断子文件是文件还是文件夹
                if(!fs.statSync(childPath).isDirectory()){
                    //是文件直接拷贝  /a/sdd  b/
                    fs.copyFileSync(childPath, childDist)
                }else{
                    //子文件还是文件夹  递归调用
                    new copyDir(childPath, childDist);
                }
            })
            
        }
    }
}


new copyDir('a','b')