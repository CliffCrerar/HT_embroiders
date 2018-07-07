const path = require('path');
const HTMLwebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const webpack = require('webpack');
const $ = require('jquery');

module.exports = {
    context: __dirname,
    mode: 'development',
    entry: {
        jsx: './src/components/index.jsx',
        libjs: './src/lib/libjs.js',
        libcss: './src/lib/libcss.js',
        app: './src/index.js',
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|svg|jpeg|woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {}
                    }
                ]
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: [':data-src']
                    }
                }
            },
            {
                test: /\.jsx/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                }
            },
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new CleanWebpackPlugin(['dist']),
        new HTMLwebpackPlugin({
            //template: './src/html/index.html',
            title: 'Embroiders / Borduurders',
            meta: require('./meta.json'),
            favicon: './favicon.png',
        }),
        new webpack.DefinePlugin({
            IP: JSON.stringify('172.16.0.104')
        }),
        new ManifestPlugin()
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};