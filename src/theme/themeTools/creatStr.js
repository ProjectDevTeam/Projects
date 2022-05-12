/**
 * 生成基础信息字符串
 * @param {*} baseColor 基础颜色信息
 * @param {""} theme 主题颜色
 * @returns 写入字符串
 */
function createBaseStr(baseColor, theme) {
    var str = `
:root{`
    Object.keys(baseColor[theme]).forEach(key => {
        str += `
    --${key}: ${baseColor[theme][key]};`
    })

    str += `
} `
    return str
}
/**
 * 生成主题信息写入字符串
 * @param {*} themeInfo 主题信息
 * @returns 写入字符串
 */
function createIndexStr(themeInfo) {
    var str = `
:root{`
    Object.keys(themeInfo).forEach(key => {
        str += `
        --${key}: var(--${themeInfo[key]});`
    })

    str += `
} `
    return str
}
module.exports = { createBaseStr, createIndexStr }