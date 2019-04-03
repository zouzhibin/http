let http = require("http");
const querystring = require('querystring');
let server = http.createServer((req,res)=>{
    // req.url/headers /method req.on("data")
    // res.write end setHeader statusCode
    let pathname = req.url; // xxx?a=1
    console.log(pathname)
    let method = req.method.toLowerCase();
    console.log(method)

    let headers = req.headers;
    console.log(headers)

    let arr = []
    req.on("data",(chunk)=>{
        arr.push(chunk)
    })
    req.on('end',function(){
        console.log("读写娲女")
        let str = Buffer.concat(arr).toString()
        
        let pas = querystring.parse(str)
        console.log(pas)
        res.setHeader("Content-Type",'application/json;charset=utf8')
        res.end(JSON.stringify(pas))
    })
})
server.listen(3001,function(){
    console.log("开启服务成功")
})