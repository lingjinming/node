var fs = require('fs')
fs.mkdir('./1', function() {
        console.log(arguments)
    })
    // fs.rmdir('./1',function(){

// })

fs.readdir('../', function(err, fileList) {

    console.log(fileList)
        //     [ '.DS_Store',
        //   '.git',
        //   '0-console.js',
        //   'Buffer',
        //   'ECMA',
        //   'README.md',
        //   'fileSystem',
        //   'mkdir',
        //   'module',
        //   'process',
        //   'readFile_unlinkFile',
        //   'writeFile' ]

    fileList.forEach(function(f) {
        fs.stat(f, function(err, info) {
            console.log(arguments) //info.mode 的值可以判断是文件夹还是文件还是其他类型
        })
    })

})