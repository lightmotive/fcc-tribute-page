const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: './dist',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "Jóhann Jóhannsson Tribute",
            template: './src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test: /\.css$/i,
                use: ['style-loader', {
                    loader: 'css-loader'
                }]
            },
            {
                test: /\.(jpg|JPG|jpeg|png|gif|mp3|ttf|woff2|woff|eot)$/gi,
                use: [
                    {
                        loader: 'file-loader'
                    }
                ]
            },
            {
                test: /\.svg$/i,
                use: {
                    loader: 'svg-url-loader',
                    options: {}
                }
            }
        ],
    }
};