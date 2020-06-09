const path = require("path");

const { CleanWebpackPlugin } = require("clean-webpack-plugin"); //每次打包清空dist文件夹下的所有文件
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');//抽离css，不会压缩
const OptimizeCssPlugin = require("optimize-css-assets-webpack-plugin");//将抽离出来的css进行压缩

module.exports={
    mode: 'production',
    devtool: "source-map",
    entry: [
        "@babel/polyfill",
        './src/index.js'
    ],
    output: {
        path: path.join(__dirname,'dist'),
        filename: 'bundle.[hash:5].js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [ MiniCSSExtractPlugin.loader,'css-loader','postcss-loader','sass-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|jpeg|webp|svg|eot|ttf|woff|woff2)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10240,
                            esModule: false,
                            name: '[name]_[hash:5].[ext]',
                            outputPath: 'assets'
                        }
                    }
                ],
                exclude: /node_modules/
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new OptimizeCssPlugin(),
        new HtmlWebpackPlugin({
            template: './assets/template.html',
            filename: path.join(__dirname,'/dist/index.html')
        }),
        new MiniCSSExtractPlugin({
            filename: 'css/[name].css'
        })
    ],
    resolve:{
        extensions: ['.js','.jsx','scss'],
        modules: [
            "node_modules",
            path.join(__dirname, 'src'),
        ],
        alias: {
            pages: path.join(__dirname,'/src/pages'),
            components: path.join(__dirname,'/src/components'),
            src: path.join(__dirname,'./src'),
            action: path.join(__dirname,'/src/redux/action'),
            reducer: path.join(__dirname,'/src/redux/reducer'),
            config: path.join(__dirname,'/src/config'),
            images: path.join(__dirname,'./assets/images'),
            styles: path.join(__dirname,'./assets/styles'),
        }
    }
}