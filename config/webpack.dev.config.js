const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const OpenBrowserPlugin = require('open-browser-webpack4-plugin');
const HtmlWebpackplugin = require('html-webpack-plugin');
const webpackConfigBase = require('./webpack.base.config');

const PORT = 8080;
const webpackConfigDev = {
    mode: 'development',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackplugin({
            inject: 'body',
            title: 'react App',
            filename: 'index.html',
            template: path.join(__dirname, '../src/index.html'),
        }),
        new OpenBrowserPlugin({
            url: `http://localhost:${PORT}/#/`,
        }),
    ],
    devtool: 'eval-source-map',
};
module.exports = merge(webpackConfigBase, webpackConfigDev);
