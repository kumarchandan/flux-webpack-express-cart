// webpack.config.js

const webpack = require('webpack');

module.exports = {
    entry: './src/main.js',
    output: {
        filename: './public/main.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loader: 'babel',
                exclude: /(node_modules|bower_components)/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /(node_modules|bower_components)/,
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
}