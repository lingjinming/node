//fs.write(fd,buffer,offset,length,position,callback)
// fd 打开的文件 ,此处的open打开模式应该为r+,读写模式
// buffer 要写入的数据
// offset buffer对象中要写入的数据的起始位置
// length 要写入buffer数据的长度
// position fd中的起始位置
// callback 回调
// 
var fs = require('fs')

fs.open('1.txt', 'r+', function(err, fd) {

    if (err) {
        console.log('打开失败')
    } else {

        var bf = new Buffer('ABC')

        fs.write(fd, bf, 0, 3, 0, function() {
            console.log(arguments)
                //[[Arguments] { '0': null, '1': 3, '2': <Buffer 41 42 43> }，此时原本1.txt文件内容变成ABCd
        });
        // fs.write(fd, '1234', 5, 'utf-8')  更方便点
        fs.close(fd, function() {
            //表示写入完成后，关闭该文件
        })

    }

});