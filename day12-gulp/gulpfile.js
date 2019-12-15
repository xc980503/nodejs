const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const cssmin = require('gulp-cssmin');
const uglify = require('gulp-uglify');
const gulpbabel = require('gulp-babel');
const htmlmin = require('gulp-htmlmin');
const htmlminify = require('gulp-html-minify');
const gulpwebserver = require('gulp-webserver')

// gulp.task(任务名，callback) 创建一个任务

//编译scss,合并，压缩css
gulp.task('sass', ()=>{
    return gulp.src('./src/scss/*.scss')  //指定操作文件
    .pipe(
        sass()
    )
    .pipe(
        concat('all.css')
    )
    .pipe(
        cssmin()
    )
    .pipe(
        gulp.dest('./src/css/')
    )
    .pipe(
        gulp.dest('./dist/css/')   //转化后的输出
    )
})

//压缩js
gulp.task('js', ()=>{
    return gulp.src('./src/js/*.js')
    .pipe(
        gulpbabel()
    )
    .pipe(
        uglify()
    )
    .pipe(
        concat('build.js')
    )
    .pipe(
        gulp.dest('./dist/js/')
    )
})

//压缩html
gulp.task('html', ()=>{
    return gulp.src('./src/index.html')

    // .pipe(
    //     htmlmin({collapsespaceWhite:true})
    // )
    .pipe(
        htmlminify()
    )
    .pipe(
        gulp.dest('./dist/')
    )
})

//监听
gulp.task('watch', ()=>{
    //gulp.watch(表示要监听的文件， 如果监听的文件发生变化想要他自动执行的任务)
    gulp.watch('src/scss/*.scss', gulp.series('sass'));
    gulp.watch('./src/js/*.js', gulp.series('js'))
})

//服务
gulp.task('server', ()=>{
    return gulp.src('dist')

    .pipe(
        gulpwebserver({
            port: 3000,  //端口号
            open: true, //自动打开浏览器
            livereload:true, //热更新，热替换
            middleware:(req, res)=>{ //中间件  拦截请求
                //同http
            }
        })
    )
})

//创建默认任务
// gulp.series()   同步
// gulp.parallel()   异步
gulp.task('default', gulp.series('sass', 'js', 'html', 'server', 'watch'))
// gulp.task('default', gulp.parallel('sass', 'js', 'html'))

