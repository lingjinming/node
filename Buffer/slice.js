var bf = new Buffer('miaov')
var bf2 = bf.slice(2, 4) // slice([start],[end]) 返回一个新的Buffer对象，但会和之前的Buffer对象引用同一个内存地址

console.log(bf2) //<Buffer 61 6f>
console.log(bf2) //<Buffer 61 6f>