var str = 'miaov';
console.log(new Buffer(str)) //<Buffer 6d 69 61 6f 76>
var bf = new Buffer(5) //注意此处的长度

bf.write(str) //把str写入bf  write(string,[offset],[length],[enconding])  
console.log(bf) //<Buffer 6d 69 61 6f 76>