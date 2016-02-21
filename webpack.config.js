var Path = require('path');
var webpack = require('webpack');
var WebpackNotifierPlugin = require('webpack-notifier');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var config = require('./config.js');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        './src/boot.js'
    ],
    output: {
        path: Path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    // require without Filename Extension
    /*resolve: {
        extensions: ['', '.js', '.jsx'],
        // if you require something in library module, you can alias it
        //  and require without path
         alias: {
              'angular': 'angular/angular',
              'lodash': 'lodash/dist/lodash'
         },
    },*/
    module: {
        // preLoaders:[{
        //       test:    /\.jsx?$/,
        //       exclude: /node_modules/,
        //       include: Path.resolve(__dirname, 'src'),
        //       loaders: ['eslint-loader']
        // }],
        loaders: [
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                loaders: ['babel-loader'],
                include: Path.join(__dirname, 'src/')
            },
            {
                test: /\.css$/, loader: 'style!css'
            },
            {
                test: /\.less$/, loader: 'style!css!autoprefixer!less'
            },
            {
                test: /\.json$/, loader: 'json'
            },
            {
                test: /\.(ttf|eot|png|gif|jpg|woff|woff2|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=8192"
            },
            {
                test: /\.(html|png)$/,
                loader: "file?name=[path][name].[ext]&context=./src"
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': '"development"'
        }),
        new webpack.NoErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new WebpackNotifierPlugin(),
        new HtmlWebpackPlugin({
          template: 'src/index.ejs',
          inject: 'body'
        })
    ],
};
