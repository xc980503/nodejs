//书架页渲染
axios.get('/getMyBook').then(val=>{
    ul.innerHTML = val.data.map((item)=>{
        return `<li>${item.title}</li>`
    }).join('')
})

//返回首页
back.onclick = ()=>{
    location.href = '/'
}