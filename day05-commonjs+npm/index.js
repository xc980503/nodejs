//引入
const ajs= require('./a.js');
// const cjs = require('./c.js');

// const test = require('./node_modules/root/test.js')
//包必须在node_modules目录
//require进来一个包  默认那边抛出的是index.js里面的东西
//npm init -y  快速生成一个package.json配置文件 可以在"main"标签下修改入口文件
//node_modules目录存在位置 可以放在当前项目或者是当前项目的上一级目录，直至根目录

const test = require('root')

console.log(test.str)
// console.log(test.sub(55,2))