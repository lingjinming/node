var fs = require('fs')
var filename = '3.txt'

if (!fs.existsSync(filename)) {
    fs.writeFileSync(filename, 'miaov2')
    console.log('新文件创建成功')
} else {
    fs.appendFileSync(filename, '新追加的内容')
    console.log('追加成功')
}