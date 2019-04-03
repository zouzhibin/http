let http = require("http");
const querystring = require('querystring');
// 用来获取类型  1.css->text/css 1.png img/png
// mine.getType(1.css)
let mine = require("mine")


// 如果客户端配置 xhr.withCredentials = true   我必须携带cookie
/**
 * res.setHeader("Access-Control-Allow-origin",'*')
 * res.setHeader("Access-Control-Allow-Methods",'GET,PUT,DELETE,OPTIONS')
 * 允许的跨域头
 * res.setHeader("Access-Control-Allow-Headers",'Content-Type,token') // 允许携带token 过来
 * 允许前端访问 携带cookie
 * res.setHeader("Access-Control-Allow-Credentials",true) // 允许携带凭证 比如cookie
 * options 的发送间隔
 * res.setHeader("Access-Control-Max-age",10) // 有效时间
 * 
 */
// fs.stat 用来判断文件是否是文件夹 是否是文件
// fs.stat(__dirname,'a',function(err,statObj){
//     console.log(statObj.isDirectory())
// })
let server = http.createServer((req,res)=>{
   
})
server.listen(3001,function(){
    console.log("开启服务成功")
})