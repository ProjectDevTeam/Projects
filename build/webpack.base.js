const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const resolve = (dir) => path.resolve(__dirname, dir);
module.exports = {
    entry: "./src/main.ts", //配置入口文件
    plugins: [
        new HtmlWebpackPlugin({
            //生成入口HTML文件
            template: "./index.html",
            filename: "index.html",
        }),
        new MiniCssExtractPlugin({
            //提取css到单独的文件中
            filename: "[name].css",
            chunkFilename: "css/chunk.[name].css",
            ignoreOrder: true,
        }),
    ],
    module: {
        rules: [
            //处理css 文件
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
            },
            //处理less文件
            {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "less-loader"],
            },
            //处理vue文件
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: "vue-loader",
                        options: {
                            cssModules: {
                                localIdentName: "[path][name]---[local]---[hash:base64:5]",
                                camelCase: true,
                            },
                        },
                    },
                ],
            },
            //处理ts,tsx,js文件
            {
                test: /\.(js|ts|tsx)$/,
                exclude:
                    /(node_modules|scripts[\\/]libs|geojson[\\/]new|share[\\/]libs|scripts\\i18n\\index)/,
                use: [
                    "thread-loader",
                    {
                        loader: "babel-loader",
                        options: {
                            rootMode: "upward",
                            cacheDirectory: true,
                        },
                    },
                ],
            },
            //处理html
            {
                test: /\.html$/,
                use: [{ loader: "text-loader" }],
            },
            //处理图片
            {
                test: /\.(png|jpe?g|gif|svg|ico)(\?.*)?$/i,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            name: "[path][name].[ext]",
                            limit: 64,
                            outputPath: "images",
                        },
                    },
                ],
            },
            //处理其他文件
            {
                test: /\.(woff2?|eot|ttf|otf|mtl|obj)(\?.*)?$/i,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[path][name].[ext]",
                            outputPath: "font",
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        alias: {
            //别名配置
            "@": resolve("../src"),
            src: resolve("../src"),
            components: resolve("../src/components"),
            router: resolve("../src/router"),
            store: resolve("../src/store"),
            views: resolve("../src/views"),
            apis: resolve("../src/apis"),
        },
        extensions: [".tsx", ".ts", ".wasm", ".mjs", ".js", ".json"],
    },
};
