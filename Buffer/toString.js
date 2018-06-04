var bf = new Buffer('miaov')

console.log(bf.toString()) // miaov
console.log(bf.toString('utf-8', 1, 3)) // ia

var bf2 = new Buffer('妙味')
console.log(bf2) // <Buffer e5 a6 99 e5 91 b3>
console.log(bf2.toString('utf-8', 1)) // ��味