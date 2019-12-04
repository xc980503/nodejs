function * show(){
    //yield generator 特有的
    //在其他函数里如果出现他是识别不了
    let arr = [1,3,4,5,6];
    // arr.forEach((item)=>{
    //     // console.log(item)
    //     yield 'item'
    // })
    for(let i=0; i<arr.length; i++){
        yield arr[i]
    }
    
    return 'ending'
}
let s = show()
console.log(s.next().value)
console.log(s.next().value)
console.log(s.next().value)
console.log(s.next().value)
console.log(s.next().value)
console.log(s.next().value)

