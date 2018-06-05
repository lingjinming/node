var fs = require('fs')

fs.unlink('1.txt', function(err) {

    if (err) {
        console.log('文件删除失败')
    } else {
        console.log('文件删除成功')
    }

})