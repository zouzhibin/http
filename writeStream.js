let fs = require("fs"); // 文件中为了能实现文件的操作 ，也提供了流相关的api
let path = require("path");

// 可写流 有两个方法 write(),end()

let rs = fs.createWriteStream(path.resolve(__dirname,'./file/name3.txt'),{
    flags:"w", // r 代表可读 w 代表可写   w不存在 会创建一个文件 如果有内容 会先清空里面的内容
    highWaterMark:5, //每次预计写入多少个
    autoClose:true, // 读取完毕后 ，关闭文件吗
    encoding:null,
    start:0,
})

// 我们写入的内容必须是字符串 或者buffer
rs.write('1231234',(error)=>{
    console.log("写入成功")
})

// 当我写入完成后，在继续写入其他的on("drain");
// 处理异步 write， end 都是异步方法啊 为了避免乱套 内部创建了空间 [123,'结束']
rs.end("结束")

