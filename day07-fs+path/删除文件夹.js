const fs = require('fs');
const path = require('path')
let delDir = (src)=>{
    //1.判断路径是否存在
    if(!fs.existsSync(src)){
        return;
    }
    else{
         //2.读取到文件夹信息
        let childs =  fs.readdirSync(src)  //childs ['css', 'js', data.json] 
        //3.根据数组的长度来判断是否是空文件夹
        if(childs.length<=0){
        //4.是空文件夹  直接删除
            fs.rmdirSync(src);
        }else{
            //5.如果不是空文件夹  判断里面每一项是文件还是文件夹
            childs.forEach(item=>{
                //子文件路径
                let childPath = path.join(src, item);
                //判断子文件是文件还是文件夹
                let flag = fs.statSync(childPath).isFile();
                if(flag){
                    //6.是文件，直接删除文件
                    fs.unlinkSync(childPath);
                }else{
                    //7.如果是文件夹 递归调用delDir()
                    delDir(childPath);
                }
            })
            //8.最后有东西的文件里面的内容删除完毕，删除本身
            fs.rmdir(src);
        }
    }

    
}

delDir('www')