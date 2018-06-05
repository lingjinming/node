var fs = require('fs')

// fs.readFile(filename, [options], callback) //异步读取一个文件的全部内容
// fs.readFileSync(filename,[options])

fs.readFile('../writeFile/1,txt', function(err, data) {
    console.log(arguments)
        // [Arguments] {
        //     '0': null,
        //     '1': <Buffer e6 88 91 e6 98 af e6 96 b0 e5 bb ba e7 9a 84> 
        // }

    if (err) {
        console.log('文件读取失败')
    } else {
        console.log(data.toLocaleString()) //我是新建的
    }
})