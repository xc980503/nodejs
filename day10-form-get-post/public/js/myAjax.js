let myAjax = (method, url) => {
    return new Promise((res, rej) => {
        //1.创建
        let xhr = new XMLHttpRequest();
        //2.xhr.open(method, url, boolean) method表示请求的方式 url表示发送请求的地址 true/false  异步/同步 
        xhr.open(method, url);
        //3.xhr.send() 发送请求
        xhr.send();
        //4.监听
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    //xhr.responseText  请求成功的返回值
                    res(xhr.responseText)
                }
            }
        }
    })
}
