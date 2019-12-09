const fs = require("fs");
const path = require("path");

let  getJson = (src)=>{
    //获取文件夹信息
    let childs = fs.readdirSync(src);
    let res=[];
    //遍历
    childs.forEach(item=>{
        let childpath= path.join(src,item);
        let isfile = fs.statSync(childpath).isFile();
        //写入json文件的对象形式
        let obj= {
            "singlePath": childpath,
            "isFile": isfile,
            "fileName": item,
            "children": isfile?null:getJson(childpath)
        }
        //添加到数组
        res.push(obj)
    })
    //返回最终得到的数组
    return res;
}
let readFload = (src)=>{  //往json文件里面写入数据，需要通过JSON.stringify转化  getJson(src)执行后的返回值就是上面的那个数组写入到json文件
    fs.writeFileSync("./index.json",JSON.stringify(getJson(src)))
}
readFload("./8月")  //生成json文件
let data = fs.readFileSync('./index.json').toString()
console.log(data)