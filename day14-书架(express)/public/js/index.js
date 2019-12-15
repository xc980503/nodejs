//渲染首页数据请求
axios.get('/getdata').then(val=>{
    box.innerHTML = val.data.map((item)=>{
        return `
        <div class="dd">
        <div class="left">
            <img src="./180.jfif" alt="">
            <h2>${item.title}</h2><br>
            <p>${item.autor}</p>
        </div>
        <div class="rig">
            <span class="detail">详情</span><br>
            <span class="add">${item.flag==0 ? '加入书架' : "已在书架"}</span><br>
            <span class="del">删除</span>
        </div>
    </div>
        `
    }).join('');

    //获取详情标签
    const details = document.querySelectorAll('.detail')
    //跳转详情页
    details.forEach((item, index)=>{
        item.onclick = ()=>{
            location.href = 'detail.html?index=' + index
        }
    })

    //获取删除标签
    const dels = document.querySelectorAll('.del');
    //点击删除的时候发送请求
    dels.forEach((item, index)=>{
        item.onclick = ()=>{
            axios.post('/del', {
                index
            }).then(val=>{
                alert(val.data);
                location.href = '/'
            })
        }
    })

    //获取加入书架标签
    const adds = document.querySelectorAll('.add');
    adds.forEach((item, index)=>{
        item.onclick = ()=>{
            axios.get('/add', {
                params:{
                    index
                }
            }).then(val=>{
                alert(val.data);
                location.href = '/'
            })
        }
    })
})

//首页搜索
searchBtn.onclick = ()=>{
    axios.get('/search', {
        params:{
            word:ipt.value
        }
    }).then(val=>{
        box.innerHTML = val.data.map((item)=>{
            return `
            <div class="dd">
            <div class="left">
                <img src="./180.jfif" alt="">
                <h2>${item.title}</h2><br>
                <p>${item.autor}</p>
            </div>
            <div class="rig">
                <span class="detail">详情</span><br>
                <span class="add">${item.flag==0 ? '加入书架' : "已在书架"}</span><br>
                <span class="del">删除</span>
            </div>
        </div>
            `
        }).join('');
    })
}

//我的书架
mybook.onclick = ()=>{
    location.href = '/mybook.html'
}
