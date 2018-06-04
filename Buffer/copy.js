//buf.copy(targetBuffer,[targetStart],[sourceStart],sourceEnd) 进行Buffer的拷贝
var bf = new Buffer('miaov')
var bf2 = new Buffer(8);

bf2.copy(bf, 1, 1, 4);
console.log(bf2)