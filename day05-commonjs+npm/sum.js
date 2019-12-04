//扩展运算符(剩余运算符)

let sum = (...arg)=>{
    let num = 0
    arg.forEach(item=>{
        num += item
    })
    return num
}

exports.sum = sum