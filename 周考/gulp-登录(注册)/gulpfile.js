const gulp = require('gulp');
const sass = require('gulp-sass');
const gulpwebserver = require('gulp-webserver');
const url = require('url');
const fs = require('fs');
const path = require('path');
const data = require('./dist/mock/data.json')

//编译scss
gulp.task('css', ()=>{
    return gulp.src('./src/scss/*.scss')

    .pipe(
        sass()
    )
    .pipe(
        gulp.dest('./dist/css/')
    )
})

//打包html
gulp.task('html', ()=>{
    return gulp.src('./src/*.html')

    .pipe(
        gulp.dest('./dist/')
    )
})

//打包数据
gulp.task('data', ()=>{
    return gulp.src('./src/mock/data.json')

    .pipe(
        gulp.dest('./dist/mock')
    )
})

//打包axios.js
gulp.task('lib', ()=>{
    return gulp.src('./src/lib/*.js')

    .pipe(
        gulp.dest('./dist/lib/')
    )
})

//监听
gulp.task('say', ()=>{
    gulp.watch('./src/scss/*.scss', gulp.series('css'));
    gulp.watch('./src/*.html', gulp.series('html'))
})

//起服务
gulp.task('server', ()=>{
    return gulp.src('dist')

    .pipe(
        gulpwebserver({
            port:8000,
            open:true,
            livereload:true,
            middleware(req,res){
                let {pathname, query} = url.parse(req.url, true);
                //处理favicon.ico图标
                if(pathname == '/favicon.ico'){
                    res.end()
                    return;
                }
                //首页
                else if(pathname == '/'){
                    res.end(fs.readFileSync('./dist/index.html'))
                }
                //静态资源
                else if(path.extname(pathname)){
                    res.end(fs.readFileSync(path.join('dist', pathname)))
                }
                //登录
                else if(pathname == '/login'){
                    // console.log(query)
                    let isLogin = data.some(item=>{
                        return item.name == query.user && item.pwd == query.pwd
                    })
                    if(!isLogin){
                        res.end(JSON.stringify({ok:false, msg:'登录失败'}))
                    }
                    else{
                        res.end(JSON.stringify({ok:true, msg:'登录成功'}))
                    }

                }
                //正确页显示
                else if(pathname =='/getUser'){
                    res.end(JSON.stringify(data))
                }
                //注册
                else if(pathname == '/reg'){
                    let isName = data.some(item=>{
                        item.name == query.name
                    })
                    if(isName){
                        res.end('用户已存在')
                    }
                    else{
                        data.push(query);
                        fs.writeFileSync('./dist/mock/data.json', JSON.stringify(data));
                        res.end('注册成功')
                    }
                }
                //删除
                else if(pathname == '/del'){
                    // console.log(query.obj)
                    // console.log(typeof(query.obj))
                    let obj = JSON.parse(query.obj);
                    let arr = obj.arr;
                    let arr2 = [];  //唯一标识 name
                    arr.forEach(item=>{ //下标
                        arr2.push(data[item].name)
                    });
                    let newData = data.filter(item=>{  //过滤掉已经在前端选中要删除的数据
                        return !arr2.includes(item.name)
                    })
                    // console.log(newData)
                    fs.writeFileSync('./dist/mock/data.json', JSON.stringify(newData));
                    res.end(JSON.stringify(newData))
                }
            }
        })
    )
})

//默认任务
gulp.task('default', gulp.series('css', 'html', 'data', 'lib', 'server', 'say'))