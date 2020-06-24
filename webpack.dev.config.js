const path = require("path");

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');//抽离css


module.exports={
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
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
                use: [
                    {
                        loader:MiniCSSExtractPlugin.loader,
                        options: {
                            hmr: true,
                            reloadAll: true
                        }
                    },
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader:MiniCSSExtractPlugin.loader,
                        options: {
                            hmr: true,
                            reloadAll: true
                        }
                    },
                    'css-loader'
                ],
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
        new HtmlWebpackPlugin({
            template: './assets/template.html',
            filename: path.join(__dirname,'/dist/index.html')
        }),
        new MiniCSSExtractPlugin({
            filename: 'css/[name].css'
        }),
    ],
    devServer: {
        compress: true,
        port: 8080,
        open: true,
        hot: true,
        host: '192.168.103.68',
        stats: 'errors-only',
        historyApiFallback: true,
        contentBase: path.join(__dirname, '/dist'),
        proxy: {
            '/api': {
              target: 'http://60.169.3.110:8091/',
              pathRewrite: {'^/api' : ''},
              changeOrigin: true,     // target是域名的话，需要这个参数，
              secure: false,          // 设置支持https协议的代理
            }
          }
    },
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