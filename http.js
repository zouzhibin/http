// 客户端 浏览器
// 服务端 监听发的请求 监听特定的ip和端口号 最大的端口号 65535

let http = require("http");
let queryString = require("querystring");  //能够解析路径 abc=1&age=10


// 创建服务器 需要提供一个监听函数，这个函数只有当请求到来时触发

// 请求分为三个部分 1.) 请求行 方法 路径 协议
//                2.)  请求头 浏览器信息+自定义  
//                3.)  请求体
// request 是可读流 response 是可写流
// 请求体需要用on data 来接收数据
// 响应也分为三部分 1.) 响应行 常见的状态码  200 204 206 范围请求
//                 301  永久重定向 302 临时重定向 304缓存
//                 401 没权限 403 无法访问 404
//                 500 服务端挂了
//                 2.) 响应头 
//                 3.) 响应体 
let app = http.createServer((res,req)=>{

})
// 代表党请求来临的时候进行触发这个函数
// app.on("request",()=>{

// })
// 已post的请求发送 usename=10&age=20 参数到这个路径
// curl -X POST -d 'usename=10&age=20' http://localhost:3000
app.listen(8000)