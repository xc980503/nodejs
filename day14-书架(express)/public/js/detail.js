// console.log(location.search)
//获取到相应详情页的下标
let index = location.search.slice(7)
console.log(index)
//渲染相应书籍的详情页
axios.get('/getdetail', {
    params:{
        index
    }
}).then(val=>{
    h1.innerHTML = val.data.title;
    h2.innerHTML = val.data.text;
})