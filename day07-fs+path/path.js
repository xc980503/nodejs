const path = require('path')
// __dirname 当前文件的目录的绝对路径
// // __filename 当前文件的绝对路径
// console.log("dirname---------" + __dirname); //C:\vscode\1710B\day07
// console.log("filename---------" + __filename); //C:\vscode\1710B\day07\path.js

//path.parse() 返回一个对象  路径转对象
// console.log(path.parse('c:/vscode/abc'))
// console.log(path.parse(__dirname)) //C:\vscode\1710B\day07
// console.log(path.parse(__filename))

//path.basename()
// console.log(path.basename(__dirname))
// console.log(path.basename(__filename))


//path.dirname() 查看你传进去路径的目录
// console.log(path.dirname(__dirname))
// console.log(path.dirname(__filename))

//path.extname()  扩展名
// console.log(path.extname(__dirname)) // ' '
// console.log(path.extname(__filename)) // .js
// console.log(path.extname('c:/vscode/a.html.js'))  //.js
// console.log(path.extname('c:/vscode/a.html.'))  //.
// console.log(path.extname('c:/vscode/.js'))  // ' '
// console.log(path.extname('c:/vscode/.js.js'))  //.js

//path.join() 路径拼接
// c:   /vscode  /1710B  /day07  path.js
// console.log( 'c:'  + '/vscode' + '/1710B' + '/day07' + '/path.js');
// console.log(path.join('c:', "vscode", "1710B", "day07", "path.js"));
console.log(path.join(__dirname, 'index.js'))








