const path = require('path');
const HTMLwebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const $ = require('jquery');
const Tether = require('tether');

module.exports = {
    context: __dirname,
    mode: 'development',
    entry: {
        libs: './src/lib/lib.js',
        app: './src/index.jsx'
        /*
        jquery: './lib/web/assets/jquery/jquery.min.js',
        Tether: './lib/tether/tether.min.js',
        bootstrap: './lib/bootstrap/js/bootstrap.min.js',
        smooth_scrol: './lib/smooth-scroll/smooth-scroll.js',
        jarallax: './lib/jarallax/jarallax.js',
        bsc: './lib/bootstrap-carousel-swipe/bootstrap-carousel-swipe.js',
        masonry: './lib/masonry/masonry.pkgd.min.js',
        imageload: './lib/imagesloaded/imagesloaded.pkgd.min.js',
        purity: './lib/puritym/js/script.js',
        mobirise_gallery: './lib/mobirise-gallery/script.js'*/
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

                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {}
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
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
            jQuery: 'jquery',
            Popper: ['popper.js', 'default'],
            Tether: Tether
        }),
        new CleanWebpackPlugin(['dist']),
        new HTMLwebpackPlugin({
            title: 'HT Embroiders',
            template: './index.html',
            meta: require('./meta.json')
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};