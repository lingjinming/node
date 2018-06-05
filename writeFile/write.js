// fs.writeFile(filename,data,[options],callback)
// 异步的将数据写入一个文件，如果不存在则新建，如果存在则替换，data可以是string也可以是一个原生buffer
var fs = require('fs')
var filename = '2.txt'

fs.writeFile(filename, 'hello', function() {
    console.log(arguments) //[Arguments] { '0': null, '1': undefined }
})

fs.writeFile(filename, 'miaov', function() {
    console.log(arguments) //[Arguments] { '0': null, '1': undefined }
})