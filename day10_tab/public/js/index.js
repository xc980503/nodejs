//默认渲染一个导航栏
axios.get('/getHead').then(res=>{
    // console.log(res.data)  后台拿过来的数据
    //渲染ul内容
    ul.innerHTML = res.data.map((item, index)=>{
        return `<li>${item.title}</li>`
    }).join('')
    main.innerHTML = `<img src='${res.data[0].src}'>`

    const lis = document.querySelectorAll('li')

    lis.forEach((item, index)=>{
        //点击li标签发起请求，获取图片地址
        item.onclick = ()=>{
            axios.get('/getImg', {
                params: {
                    index,
                }
            }).then(res=>{
                // console.log(res.data)
                //渲染相应页面的图片
                main.innerHTML = `<img src='${res.data}'>`
            })
        }
    })
})