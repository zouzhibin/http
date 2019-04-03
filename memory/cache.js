// 缓存 分为两种 强制缓存  （首页没法强制缓存） 对比缓存

let http = require("http");
let mine = require("mime")
let url = require("url");
let path = require("path");
let fs = require("fs")
let crypto = require("crypto")


// 协商缓存 304 你第一次访问我的时候 我给你设置一个头 last-modified 最后的修改时间 8:00
// 你在请求我的时候  你带上这个时间 8:00 10:00 返回新的文件
http.createServer(function(req,res){
    let {pathname} = url.parse(req.url,true)  //获取参数
    let abs = path.join(__dirname,pathname)
    // 强制缓存
    // res.setHeader('Cache-Control','max-age=10')
    // res.setHeader('Expires',new Date(Date.now()+10000).toUTCString())


    // 判断文件是否存在
    console.log('222',path.join(__dirname,pathname))
    fs.stat(path.join(__dirname,pathname),(err,stat)=>{
        if(err){
            res.statusCode = 404
            res.end('Not Found')
        }
        //console.log('stat',stat)
        // Etag 实体内容 她是根据文件内容 算出一个唯一的值 md5
        if(stat.isFile()){
            let md5 = crypto.createHash("md5");
            let rs = fs.createReadStream(abs);
            let arr = [];
            rs.on("data",function(data){
                md5.update(data)
                arr.push(data)
            })
            // etag 的方式比较靠谱 不能对大文件进行etag 文件的大小+文件的最后修改时间 来组成这个etag
            rs.on("end",function(){
                let etag = md5.digest("base64");
                if(req.headers['if-none-match']===etag){
                    res.setHeader('Etag',etag)
                    res.statusCode=304;
                    res.end()
                    return 
                }
                res.setHeader('Etag',etag)
                res.end(Buffer.concat(arr))
            })
            // let ctime = stat.ctime.toUTCString();
            // if(req.headers['if-modified-since'] ==ctime){
            //     res.statusCode=304;
            //     res.end()
            //     return 
            // }
            // res.setHeader('Last-Modified',stat.ctime.toUTCString())  // 文件的当前修改时间
            // fs.createReadStream(abs).pipe(res)
            // 全部都使用 如果浏览器 访问服务端 会先加一个强制缓存 强制缓存5s 
            // 过了5s后会在发送请求 对比缓存 先判断 last-modified 在判断他etag 如果都成立 返回304 
            // 强制缓存5s 
            // 如果有变化会在返回新的文件
        }
    })

}).listen(3000)