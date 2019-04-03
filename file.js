// fs file system 文件操作相关
// http服务，读取文件可以使用绝对路径
let fs = require("fs");
let path = require("path");
console.log(path.resolve(__dirname,'./file/name1.txt'))
fs.readFile(path.resolve(__dirname,'./file/name1.txt'),(err,data)=>{
  
    fs.writeFile(path.resolve(__dirname+'/file','./name2.txt'),data,(err)=>{
        console.log("写入成功")
    })
})
// 流 边读2边写（可以控制读取的速率）流基于事件的 
// event on/emit()
