var shellsData = require('./readFile')
var { baseColor, themeInfo } = shellsData()
// var baseInfo = [
//     { name: "light", url: path.join(__dirname, "./css/lightTheme.css") },
//     { name: "dark", url: path.join(__dirname, "./css/darkTheme.css") }
// ]
// function createCssFile(name, file) {
//     var str = ""
//     str = "/* i18nIgnore" + name + "*/\n\n\n"

//     writeFile(file, str)
// }
// // 写文件
// function writeFile(file, data) {
//     fs.writeFile(file, data, function (err, data) {
//         if (err) {
//             console.log(file + "写文件操作失败:", err)
//         } else {
//             console.log("文件写入成功" + file)
//         }
//     })
// }
for (key in baseColor) {
    console.log(key);
}
console.log(baseColor);