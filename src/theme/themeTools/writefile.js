var shellsData = require('./readFile')
var fs = require("fs")
var path = require("path")
var { createBaseStr, createIndexStr } = require("./creatStr")
var { baseColor, themeInfo } = shellsData()
var baseInfo = [
    { name: "light", url: path.join(__dirname, "../css/lightTheme.css") },
    { name: "dark", url: path.join(__dirname, "../css/darkTheme.css") }
]
/**
 * 创建CSS文件
 * @param {string} name 文件名
 * @param {string} file 文件路径
 */
function createCssFile(name, file) {
    var str = ""
    str = "/* i18nIgnore " + name + " */\n\n\n"
    str += createBaseStr(baseColor, name)
    writeFile(file, str)
}
/**
 * 写入文件
 * @param {string} file 文件名 
 * @param {string} data 写入字符串 
 */
function writeFile(file, data) {
    fs.writeFile(file, data, function (err, data) {
        if (err) {
            console.log(file + "写文件操作失败:", err)
        } else {
            console.log("文件写入成功" + file)
        }
    })
}
baseInfo.forEach(item => {
    createCssFile(item.name, item.url)
})
writeFile(path.join(__dirname, "../css/global.less"), createIndexStr(themeInfo))
