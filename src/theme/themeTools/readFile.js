var fs = require("fs")
var path = require("path")
var XLSX = require("node-xlsx")
function resData() {
    var workbook = XLSX.parse(path.join(__dirname, "./theme.xls"))
    var shell = {}
    workbook.forEach(item => {
        var { name, data } = item
        if (name === "baseColor") {
            shell[name] = data.slice(1).map(item => { return item.filter(item => { return item }) })
        }
        else { shell[name] = data.slice(1).map(item => { return item.filter((item, index) => { return index > 2 }) }) }
    })
    var resData = {}
    // resData.themeInfo = shell.themeInfo
    shell.baseColor.forEach(item => {
        resData["baseColor"] = resData["baseColor"] ?? {}
        resData["baseColor"]["dark"] = resData["baseColor"]["dark"] ?? {}
        resData["baseColor"]["light"] = resData["baseColor"]["light"] ?? {}
        resData["baseColor"]["dark"][item[0]] = `rgba(${item[1]},${item[2]})`
        resData["baseColor"]["light"][item[0]] = `rgba(${item[3]},${item[4]})`
    })
    shell.themeInfo.forEach(item => {
        resData["themeInfo"] = resData["themeInfo"] ?? {}
        resData["themeInfo"][item[0]] = item[1]
    })
    return resData
}

module.exports = resData
