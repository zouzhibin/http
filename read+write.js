let fs = require("fs");

let path = require("path");

let r = fs.createReadStream(path.resolve(__dirname,'./file/name4.txt'),{
    highWaterMark:3
})
let ws = fs.createWriteStream(path.resolve(__dirname,'./file/name5.txt'),{
    highWaterMark:1
})
r.on('data',(chunk)=>{
    // 写入文件 当每次写入的文件超过可写的最大数后，会返回false
    let flag = ws.write(chunk)  
    console.log(flag)
    if(!flag){
        r.pause()
    }
})
// 等待写入完成后，恢复读取
ws.on('drain',function(){
    console.log("抽干")
    r.resume()
})
r.on('end',function(){
    ws.end("结束l ")
})