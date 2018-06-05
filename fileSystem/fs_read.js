//fs.read(fd,buffer,offset,length,position，callback)
// fd 通过open方法成功打开文件后返回的编号
//buffer buffer对象
//offset 偏移量，新的内容添加到Buffer对象中的起始位置
//length 长度,往Buffer对象里面写入的长度
//position 读取文件中的起始位置
//callback 回调函数,三个参数,其实就是新的Buffer对象相关信息
//

var fs = require('fs')

fs.open('1.txt', 'r', function(err, fd) {

    if (err) {
        console.log('打开失败' + err)
    } else {

        var bf1 = new Buffer('123456789')
        console.log(bf1) //<<Buffer 31 32 33 34 35 36 37 38 39>

        fs.read(fd, bf1, 0, 4, null, function(err, len, newBf) {
            console.log(bf1) //<Buffer 61 62 63 64 35 36 37 38 39>

            console.log(len) // 4

            console.log(newBf) //<Buffer 61 62 63 64 35 36 37 38 39>

        })

    }

})