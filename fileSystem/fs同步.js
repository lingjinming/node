//同步的，会有一个返回值，和Java等语言类似，可以一步接着一步

var fs = require('fs')

var fd = fs.openSync('1.txt', 'r')

console.log(fd) //13