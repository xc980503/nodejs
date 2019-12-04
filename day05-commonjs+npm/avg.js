const sumjs = require('./sum.js')

let avg = (...arg)=>{
    return sumjs.sum(...arg)/arg.length
}

exports.avg = avg