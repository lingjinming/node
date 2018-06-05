// fs.open(payh,flags,[mode],callback)  这是异步的,容易造成多层嵌套
// path 要打开文件的路径
// flags 打开文件的方式 ：读、写 r,r+
// mode 设置文件模式：读、写、执行 对应4、2、1
// callback 打开后的回调  两个参数 err(如果成功则返回null)，fd 被打开的文件标识(和定时器类似)

var fs = require('fs') // 引入fs模块

fs.open('1.txt', 'r', function(err, fd) {
    console.log(err - fd) // -13
})
fs.open('2.txt', 'r', function(err, fd) {
    console.log(err) // { Error: ENOENT: no such file or directory, open '2.txt' errno: -2, code: 'ENOENT', syscall: 'open', path: '2.txt' }
})

fs.open('1.txt', 'r', function(err, fd) {
    if (err) {
        console.log('文件打开失败')
    } else {
        console.log('文件打开成功，fd是：' + fd) //文件打开成功，fd是：14
    }
})
console.log('因为异步的原因，所以我会第一个打印出来！')