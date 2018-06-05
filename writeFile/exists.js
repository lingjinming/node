// fs.exists(path,callback)


// fs.existsSync(path,callback)

var fs = require('fs')

fs.exists('2.txt', function() {
    console.log(arguments) //[Arguments] { '0': true }
})

fs.exists('1.txt', function(isExists) {
    console.log(arguments) //[Arguments] { '0': false }
    if (!isExists) {
        fs.writeFile('1,txt', '我是新建的', function() {
            console.log(arguments)
        })
    }
})