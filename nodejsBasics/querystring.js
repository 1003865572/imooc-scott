var querystring = require('querystring')

let json = {name: 'sxl', list: [1,2,3,4]}

/*
  第一个参数是字符串模板
  第二个参数是以 什么 分割
  第三个参数是以 什么 字符描述赋值关系
*/
json = querystring.stringify(json, '->', '()')
console.log(json)
json = querystring.parse(json, '->', '()')
console.log(json)

// 中文转码
let str = '<哈哈>'
str = querystring.escape(str)
console.log( str )
str = querystring.unescape(str)
console.log( str )
