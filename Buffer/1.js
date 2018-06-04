//Buffer类用于操作文件或者网络数据（二进制数据流），new Buffer(size) ;size [num]创建一个Buffer对象，并分配大小,其长度是固定的，不能更改

var bf = new Buffer(5) //这里的空间大小是5个长度
var bf2 = new Buffer([1, 2, 3])
var bf3 = new Buffer('miov', 'utf-8') //不同的编码格式生成的数据格式不一样，但转成二进制都是一样的
for (var i = 0; i < bf3.length; i++) {
    console.log(String.fromCharCode(bf3[i]))
}

// console.log(bf) //<Buffer 00 00 00 00 00>
// console.log(bf2) //<Buffer 01 02 03>
// console.log(bf3) //<Buffer 6d 69 6f 76>