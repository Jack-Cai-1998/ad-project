const path = require('path');
const { CleanWebpackPlugin } =  require('clean-webpack-plugin');
const HtmlWebpackplugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const webpackConfigBase = require("../config/webpack.base.config");
const webpackConfigProd = {
    mode: "production",
    plugins: [
        new HtmlWebpackplugin({
            inject: "body",
            title: "React App",
            filename: "index.html",
            template: path.join(__dirname, "../src/index.html")
        }),
        new CleanWebpackPlugin({
            protectWebpackAssets: true,
        })
    ]
}
module.exports = merge(webpackConfigProd, webpackConfigBase);