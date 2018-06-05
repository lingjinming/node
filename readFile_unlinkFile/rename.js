//fs.rename('原文件名'，’新的文件名‘，callback)

// fs.stat('文件名'，callback)  读取文件本身状态信息

// fs.watch('filename'，[options],[listener])  观察指定路径的改变，filename可以是文件或者是目录。。但是是不稳定的

var fs = require('fs')

fs.rename('11.txt', '11.html', function() {
    console.log(arguments) //[Arguments] { '0': null, '1': undefined }

    fs.stat('11.html', function() {
        console.log(arguments)
    })

})