// 流 几种流   可读流 可写流 双工流 转换流（压缩）
// 可以分段读取 可以控制速率

let fs = require("fs"); // 文件中为了能实现文件的操作 ，也提供了流相关的api
let path = require("path");
// new ReadStream 返回的是可读流的实例
let rs = fs.createReadStream(path.resolve(__dirname,'./file/name1.txt'),{
    flags:"r", // r 代表可读 w 代表可写
    highWaterMark:3, //每次最多读取多少
    autoClose:true, // 读取完毕后 ，关闭文件吗
    encoding:null,
    start:1,
    end:5,  // slice(start,end) 包含end
})
// 流 默认流是暂停模式  非流动模式 内部会监控你有没有监听data 事件 rs.emit('data,123)
rs.on("error",()=>{  // 如果读写错误 比如读取的文件不存在，会触发onerror

})
let arr = []
rs.on("data",(chunk)=>{
    arr.push(chunk)
    rs.pause()  // 可以暂停读取 暂停data事件的触发
})
// 只会触发一次 只有等文件全部读取完毕之后才会触发
rs.on("end",(chunk)=>{
    // Buffer.concat(arr) 用buffer 拼接是为了防止读取中文的时候乱码 因为一个中文代表三个字节
    console.log( Buffer.concat(arr).toString())  // 读取完毕s
})
setTimeout(() => {
    rs.resume()  // 恢复data事件触发
}, 1000);