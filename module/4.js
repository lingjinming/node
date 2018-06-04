// 在一个模块中中通过var定义的变量，其作用域是当前模块，不能直接被其他模块访问
// 通过以下方法可以实现：
// 1- 把变量作为global对象的一个属性，但是这样的做法是不推荐的 global.a = 1;
// 2- 使用模块对象 module 


// module 保存提供当前模块有关的信息
require('./5') // 有一个返回值，即module.exports对象

//console.log(module)
// 被4.js加载，被访问的变量a的值是100
// Module {
//     id: '.',
//     exports: {},  // 可以通过这个对象把一个模块中的局部变量对象进行提供访问
//     parent: null,
//     filename: '/Users/lingjinming/Desktop/node学习/module/4.js',
//     loaded: false,
//     children:
//      [ Module {
//          id: '/Users/lingjinming/Desktop/node学习/module/5.js',
//          exports: {},
//          parent: [Circular],
//          filename: '/Users/lingjinming/Desktop/node学习/module/5.js',
//          loaded: true,
//          children: [],
//          paths: [Array] } ],
//     paths:
//      [ '/Users/lingjinming/Desktop/node学习/module/node_modules',
//        '/Users/lingjinming/Desktop/node学习/node_modules',
//        '/Users/lingjinming/Desktop/node_modules',
//        '/Users/lingjinming/node_modules',
//        '/Users/node_modules',
//        '/node_modules' ] }

var res = require('./5');
console.log(res) // { b: 200 }

// 模块作用域下，还有一个内置的模块对象，exports ，它其实就是module.exports ,使用时不可轻易改变他们的指向关系