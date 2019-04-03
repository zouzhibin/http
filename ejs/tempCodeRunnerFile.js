
var a = 1;   
  new Function("var a=3;")();   //不改变当前作用域的变量
  console.log(a);