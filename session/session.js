let http = require("http");
let uuid = require("uuid");   // 会生成一个唯一的值

let sessionId = 'zouzhibing'

let session = {

}
http.createServer(function(req,res){
    if(req.url==='/towash'){
        let cookies = querystring(req.headers.cookies,'; ')||{}
        if(cookies[sessionId]){
            
        }else{

        }
    }
}).listen(3000)
