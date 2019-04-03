// ssr 就是用模板加数据 渲染好一个 html字符串 返还给客户端

let data = {arr:[1,2,3]}
let ejs = require("ejs");
let fs = require("fs");
let path = require("path");
let tempStr = fs.readFileSync(path.resolve(__dirname,'index.html'),'utf8')



function render(str,data){
    str = str.replace(/<%=([\s\S]*?)%>/g,function(){
        return '${'+arguments[1]+'}'
    })
    let head ='let str;\r\nwith(data){\n\r'
    head += 'str = `'
    // str 代表整个模板字符串  然后在前面拼接 head
    // console.log(str)
    content = str.replace(/<%([\s\S]*?)%>/g,function(){
        // 执行了两次 第一次 是 <%arr.forEach(a=>{%>
        // 第二次是 <%})%>
        // 把正则匹配到的内容进行了替换
        // console.log(arguments)   
        // console.log('`\r\n'+arguments[1]+'\r\nstr+=`')
        return '`\r\n'+arguments[1]+'\r\nstr+=`'
    })
    // console.log('---',content)
    let tail ='`\r\n}\r\nreturn str'
    let fn = new Function('data',head+content+tail)
    return fn(data)
}
// let str = ejs.render(tempStr,data)
let str = render(tempStr,data)
console.log(str)





