sub.onclick = ()=>{
    // axios.get('/getdata', {
    //     params:{
    //         text:ipt.value
    //     }
    // })
    axios.post('/getdata', {
            text:ipt.value       
    })
}

axios.get('/getlist').then(res=>{
    ul.innerHTML = res.data.map(item=>{
        return `<li><input type='checkbox' class='check'>  ${item.title} ${item.text}</li>`
    }).join("")
    const checks = [...document.querySelectorAll('.check')]
    // console.log(checks)
    delBtn.onclick = () => {
        // let checkChange = checks.filter((item, index) => {
        //     return item.checked == true
        // })
        let arr = []
        checks.forEach((item, index) => {
            if (item.checked == true) {
                arr.push(index)
            }
        })
        // console.log(arr, '------');
        //删除请求
        axios.get('/del', {
            params: {
                obj: {
                    arr
                }
            }
        }).then(res => {
            console.log(res.data)
            location.href = '/'
        })
    }


})

