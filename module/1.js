// node 里面,一个文件就是一个模块，每个模块都有自己的作用域

// 我们用var来声明的一个变量，它并不是全局的而是属于当前模块下的

// __filename :当前文件被解析后的绝对路径
console.log(__filename) //  Users/lingjinming/Desktop/node学习/module/1.js

// 模块加载系统  require('模块')
require('./2');
// 默认会按照模块的文件名加载，如果没有找到，则会自动加上.js再查找加载require('./2.js'); 
// 文件名 -> .js -> .json -> .node

// 模块加载机制
// 路径可以是绝对路径和相对路径，但必须加上./ 如果不加上./的话表示的是加载node中的核心模块方法(node_modules)