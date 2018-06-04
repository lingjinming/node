// 提供操作输入流和输出数据的方法，通常也称为IO操作
// stdin 标准输入流，键盘鼠标摄像头
// stdin 标准输出流，显示器，打印机，绘图仪，音响
function Log(data) {
    process.stdout.write(data + '\n')
}
Log('hello')