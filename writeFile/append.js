// fs.appendFile(filename,data,[options],callback)
// 异步的将数据加入一个已存在的文件末尾，如果不存在则新建,data可以是string也可以是一个原生buffer
var fs = require('fs')

fs.appendFile('2.txt', '新的内容', function() {
    console.log(arguments) //[Arguments] { '0': null, '1': undefined }
})