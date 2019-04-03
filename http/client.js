let http = require("http");

// http.get -> 他只能发送get请求 
// http.request 他可以发送post请求 也可以发送get请求
// 通过服务端发请求 没有跨域的问题
let client = http.request({
    hostname:"localhost",
    port:3001,
    path:'/xxx?a=1',
    method:"post",
    headers:{
        a:1
    }
},(response)=>{
    // console.log('response',response)
    response.on("data",function(chunk){
        console.log(chunk.toString())
    })

})
client.end("name=z&a=1")

// node 做客户端请求一般用来是
// 1. 爬虫
// 2. 中间层 做转发