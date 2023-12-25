const ESLintWebpackPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {VueLoaderPlugin} = require('vue-loader');
const path = require('path');


module.exports = {
    mode : 'development',
    entry : {
        app : path.resolve(__dirname,'src/app.js')
    },
    output: {
        path: path.resolve(__dirname,'dist'),
        filename : '[name][contenthash].js',
    },
    resolve: {
        extensions: ['.js','.scss']
    },
    module : {
      rules : [
        {
            test: /\.js$/,
            exclude : /node_modules/,
            loader : 'babel-loader',
            options : {
                configFile : path.resolve(__dirname,'.babelrc'),
                babelrc: true
            }
        },
        {
            test: /\.vue$/,
            loader: 'vue-loader'
        },
        {
            test : /\.s?css$/i,
            use : ['style-loader','css-loader','sass-loader']
        },
        {
            test: /\.(png|jpe?g|svg|png)$/,
            loader: 'url-loader',
            options : {
                limit : 8000,
                name: '[name]-[hash].[ext]'
            }
        }
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            filename : 'index.html',
            template : path.resolve(__dirname,'./src/index.template.html')
        }),
        new ESLintWebpackPlugin(),
        new VueLoaderPlugin()
    ],
    devServer : {
        static : {
            directory : path.resolve(__dirname,'./dist')
        },
        hot: true,
        port: 9000,
        compress : true,
        open: true,
        historyApiFallback :  true
    }
}