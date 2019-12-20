//模糊搜索
searchBtn.onclick = ()=>{
    axios.get('/search', {
        params:{
            word:searchIpt.value
        }
    }).then(val=>{
        content.innerHTML = val.data.map(item => {
            return `
           <ul>
                <li class='li_ym'>${item.ym}</li>
                <li class="li_flag">${item.flag===true?"正常":"待认证"}</li>
                <li class="li_lastTime">${item.lastTime}</li>
                <li class="li_operation"><button>删除</button>&nbsp;<button class='edit'>编辑</button></li>
            </ul>
           `
        }).join('');
    })
}

//首页
axios.get('/getdata').then(val => {
    content.innerHTML = val.data.map(item => {
        //存到本地存储
        localStorage.setItem('list', JSON.stringify(val.data))
        return `
       <ul>
            <li class='li_ym'>${item.ym}</li>
            <li class="li_flag">${item.flag===true?"正常":"待认证"}</li>
            <li class="li_lastTime">${item.lastTime}</li>
            <li class="li_operation"><button>删除</button>&nbsp;<button class='edit'>编辑</button></li>
        </ul>
       `
    }).join('');

    //编辑
    const edits = document.querySelectorAll('.edit');
    edits.forEach((item, index)=>{
        item.onclick = ()=>{
            // console.log(item)
            location.href = 'edit.html?index='+index   //  /public/public/edit.html
        }
    })

})

//前端排序
sortBtn.onclick = ()=>{
    let data = JSON.parse(localStorage.getItem('list'));
    data.sort((a, b)=>{
        return new Date(a.lastTime).getTime() -new Date(b.lastTime).getTime()
    });
    content.innerHTML = data.map(item => {
        return `
       <ul>
            <li class='li_ym'>${item.ym}</li>
            <li class="li_flag">${item.flag===true?"正常":"待认证"}</li>
            <li class="li_lastTime">${item.lastTime}</li>
            <li class="li_operation"><button>删除</button>&nbsp;<button>编辑</button></li>
        </ul>
       `
    }).join('');
}


//后端排序
// sortBtn.onclick = ()=>{
//     axios.get('/sort').then(val=>{
//         content.innerHTML = val.data.map(item => {
//             return `
//             <ul>
//                 <li class='li_ym'>${item.ym}</li>
//                 <li class="li_flag">${item.flag===true?"正常":"待认证"}</li>
//                 <li class="li_lastTime">${item.lastTime}</li>
//                 <li class="li_operation"><button>删除</button>&nbsp;<button>编辑</button></li>
//             </ul>
//             `
//         }).join('');
//     })
// }
