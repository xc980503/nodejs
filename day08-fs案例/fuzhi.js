//引入模块
const fs=require('fs');
const path=require('path');

let fuzhi=(src,nsrc)=>{
    if(!fs.existsSync(src)){
        return;
    }else{
        let arr=fs.readdirSync(src);
        if(arr.length>0){
            arr.forEach(item=>{
                let ls=path.join(src,item)
                let ms=path.join(nsrc,item)
                if(fs.statSync(ls).isDirectory()){
                    fs.mkdirSync(ms)
                    fuzhi(ls,ms);
                }else{
                    fs.copyFileSync(ls,ms);
                }
            }) 
        }else{
            fs.mkdirSync(nsrc);
        }
        
    }

}
fuzhi('scr','a');
