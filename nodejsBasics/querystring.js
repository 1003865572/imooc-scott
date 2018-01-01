var querystring = require('querystring')

let json = {name: 'sxl', list: [1,2,3,4]}

json = querystring.stringify(json)
console.log(json)
json = querystring.parse(json)
console.log(json)

// 中文转码
let str = '<哈哈>'
str = querystring.escape(str)
console.log( str )
str = querystring.unescape(str)
console.log( str )
