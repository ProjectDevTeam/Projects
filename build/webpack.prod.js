//webpack.prod.js
const common = require("./webpack.base");
const { merge } = require("webpack-merge");
const path = require("path");

module.exports = merge(common, {
    mode: "production",
    output: {
        //出口
        path: path.resolve(__dirname, "../dist"), //输出路径
        clean: true, //清空打包文件
        filename: "js/[name].[chunkhash].js", //输出文件名
        chunkFilename: "js/[name].[chunkhash].js", //输出异步文件文件名
    },
});
