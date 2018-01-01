var url = require('url')

console.log(
  url.parse('http://www.baidu.com')
)

console.log(
  url.parse('http://www.baidu.com/?aa=1&bb=2')
)


console.log(
  url.parse('http://www.baidu.com/?aa=1&bb=2', true)
)

console.log(
  url.format({
    protocol: 'http:',
    slashes: true,
    auth: null,
    host: 'www.baidu.com',
    port: null,
    hostname: 'www.baidu.com',
    hash: null,
    search: '?aa=1&bb=2',
    query: { aa: '1', bb: '2' },
    pathname: '/',
    path: '/?aa=1&bb=2',
    href: 'http://www.baidu.com/?aa=1&bb=2' })
)
