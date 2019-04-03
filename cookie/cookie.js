let http = require("http");
let querystring = require("querystring");
http.createServer(function(req,res){
    //封装cookie
    let arr = []
    res.setCookie = function(key,value,options){
        let optionsArr = []
        if(options.maxAge){
            optionsArr.push(`Max-Age=${options.maxAge}`)
        }
        if(options.path){
            optionsArr.push(`path=${options.path}`)
        }
        arr.push(`${key}=${value}; `+optionsArr.join("; "))
    }


    if(req.url === '/read'){
        let cookies = querystring.parse(req.headers.cookie,'; ')
        res.end(JSON.stringify(cookies))
    }
    if(req.url === '/read2'){
        let cookies = querystring.parse(req.headers.cookie,'; ')
        res.end(JSON.stringify(cookies))
    }
    if(req.url === '/write'){
        // cookie 设置一个  res.setHeader('Set-Cookie','name=zo')
        // cookie 设置多个  res.setHeader('Set-Cookie',['name=zo','name=zou'])
        // res.setHeader('Set-Cookie','name=zo')
        // res.setHeader('Set-Cookie','name=zou')

        // domain 默认只针对某个域名
        // res.setHeader('Set-Cookie',['name=zo','age=zou'])
        // 只在设置的域名下进行cookie 可读可写操作 path  只在该路径下可以进行访问cookie
        // 设置过期时间 expirse 绝对时间 exprise='+new Date(Date.now()+10000).toUTCString()  /max-age 相对时间 max-age = 10 10秒过期
        // httpOnly (一般情况下服务端设置的都是true 为了防止在客户端随意更改 客户端也获取不了cookie)
        res.setHeader('Set-Cookie','n=10; domain=b2.zouzzz.com; path=/read2')
        res.end("write ok ")
    }
}).listen(3000,()=>{
    console.log("开启服务成功")
})


// 签名  就是给cookie 标个记号 下次你带上记号和内容 就可以确认这个东西有没有更改
// crypto 核心模块  md5
// md5 是摘要算法 并不是加密

// 1) 相同的内容 并不是加密
// 2) 不同的内容 摘要后相同
// 3) 长度相同
// 4) 摘要后不能反过来
// let str = crypto.creteHash("md5").update("12345").digest("base64")


// let secret ='zf1';
// let crypto = require("crypto") // 加盐算法 
// let str = crypto.createHmac("sha256",secret).update("123456").digest("base64")