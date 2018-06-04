// __filename 返回的是当前模块解析后的绝对路径，并非全局，而是模块作用域下的，即每个模块下面的这个值是不一样的，不可用global.__filename
// __dirname 和__filename, 不过返回的是文件夹所在路径

console.log(__filename)
    // /Users/lingjinming/Desktop/node学习/module/filename.js


console.log(__dirname)

// /Users/lingjinming/Desktop/node学习/module

setInterval(function() {

    var d = new Date();
    console.log('现在是：' + d.getFullYear() + '年' + (d.getMonth() + 1) + '月' + d.getDate() + '日' +
        d.getHours() + ':' + d.getMinutes() + '分' + d.getSeconds() + '秒')

}, 1000)