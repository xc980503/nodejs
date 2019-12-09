const fs = require('fs');
const path = require('path');

let copyDir = (src, dist) => {
    //判断要拷贝的文件夹是否存在
    if (!fs.existsSync(src)) {
        return;
    } else {
        //判断拷贝后的文件夹是否存在
        if (!fs.existsSync(dist)) {
            fs.mkdirSync(dist);
        }
        //读要拷贝文件夹的内容
        let childs = fs.readdirSync(src); //a['add', 'sdd']
        childs.forEach(item => {
            //拼接子文件的正确路径
            let childPath = path.join(src, item)
            let childDist = path.join(dist, item)
            //判断子文件是文件还是文件夹
            if (!fs.statSync(childPath).isDirectory()) {
                //是文件直接拷贝  /a/sdd  b/
                fs.copyFile(childPath, childDist, (err, data)=>{
                    if(err){
                        throw err;
                    }else{
                        console.log('拷贝'+childPath);
                        if(path.extname(childDist)=='.css'){
                            //修改css文件里的background字段为color
                            let str = fs.readFileSync(childDist).toString().replace(/background/g, 'color');
                            fs.writeFileSync(childDist, str)
                        }

                    }
                })
            } else {
                //子文件还是文件夹  递归调用
                copyDir(childPath, childDist);
            }
        })

    }
}

copyDir('./8月', 'b')