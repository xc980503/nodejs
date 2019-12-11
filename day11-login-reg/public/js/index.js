//点击登录发送请求
const ipts = document.querySelectorAll('input')
loginBtn.onclick = ()=>{
    axios.post('/login', {
        "name":ipts[0].value,
        "pwd":ipts[1].value
    }).then(res=>{
        if(res.data.code == 0){
            alert(res.data.msg);
        }else{
            location.href = 'suc.html'
        }
    })
}

//点击注册发送注册请求
regBtn.onclick = ()=>{
    axios.get('/reg', {
        params: {
            "name":ipts[0].value,
            "pwd":ipts[1].value
        }
    }).then(res=>{
            alert(res.data.msg)
    })
}