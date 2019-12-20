// ?index=12
let id = location.search.slice(7);
const ipts = document.querySelectorAll('input')
axios.get('/getEdit', {
    params:{
        id
    }
}).then(val=>{
    //val.data ==> newdata  对象
    ipts[0].value = val.data.ym;
    ipts[1].value = val.data.flag;
    ipts[2].value = val.data.lastTime;
});

//编辑页确定
editBtn.onclick = ()=>{
    axios.post('/edit', {
        ym: ipts[0].value,
        flag: ipts[1].value,
        lastTime: ipts[2].value
    }).then(val=>{
        alert(val.data);
        location = '/'
    })
}