// 类方法，静态方法


//console.log(Buffer.isEncoding('utf-8')) //true
//console.log(Buffer.isEncoding('gbk')) //fasle
//Buffer.isBuffer(obj)  测试这个obj是不是Buffer对象
//Buffer.byteLength(string,[encoding])  返回这个字符串真实的byte长度，
//Buffer.concat(list,[totalLength])  返回一个保存着传入Buffer数组中所有Buffer对象拼接在一起的Buffer对象

var str1 = 'miaov'
var str2 = '妙味'
var list = [new Buffer(str1), new Buffer(str2)]

var bf = Buffer.concat(list)
console.log(list) //[ <Buffer 6d 69 61 6f 76>, <Buffer e5 a6 99 e5 91 b3> ]
console.log(bf) //<Buffer 6d 69 61 6f 76 e5 a6 99 e5 91 b3>