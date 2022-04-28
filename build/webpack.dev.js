//webpack.dev.js
const common = require("./webpack.base");
const { merge } = require("webpack-merge");
module.exports = merge(common, {
    devtool: "inline-source-map", //控制台调试代码
    mode: "development", //开发环境webpack内置优化
    devServer: {
        client: {
            progress: true,
        },
        compress: true, //gzip压缩
        hot: true, //热更新
        // open: true, //自动打开默认浏览器
        open: {
            app: {
                name: "goole-chrome", //走动打开chrome
                arguments: ["--incognito", "--new-window"], //无痕，新的窗口
            },
        },
        port: 8081, //监听端口
        proxy: {}, //代理配置
    },
});
