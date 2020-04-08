const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: "assets"
    },
    devServer: {
        contentBase: './dist',
    },
    devtool: 'inline-source-map',
    plugins: [
        // new CleanWebpackPlugin(),
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
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                loader: 'url-loader',
                options: {
                    // Images larger than 10 KB won’t be inlined
                    limit: 10 * 1024,
                    publicPath: 'assets'
                }
            },
            {
                test: /\.svg$/i,
                use: {
                    loader: 'svg-url-loader',
                    options: {
                        publicPath: 'assets'
                    }
                }
            }
        ],
    }
};