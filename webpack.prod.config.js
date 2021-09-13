// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//     entry: './src/index.js',
//     output: {
//         filename: 'bundle.[contenthash].js',
//         path: path.resolve(__dirname, 'build'),
//         clean: true,
//         environment: {
//             arrowFunction: false,
//         }
//     },
//     plugins: [
//         new HtmlWebpackPlugin({
//             filename: 'index.html',
//             template: './index.html'
//         }),
//         new HtmlWebpackPlugin({
//             filename: 'balkony.html',
//             template: './balkony.html'
//         }),
//         new HtmlWebpackPlugin({
//             filename: 'kuhni.html',
//             template: './kuhni.html'
//         }),
//     ],
//     mode: 'production',
//     module: {
//         rules: [
//             {
//                 test: /\.js$/i,
//                 //  исключаем из бандла
//                 exclude: /node_modules/,
//                 use: {
//                     loader: 'babel-loader',
//                     options: {
//                         presets: ['@babel/env']
//                     },
//                 },
//             },
//             // {
//             //     test: /\.css$/i,
//             //     use: ["style-loader", "css-loader"]
//             // },
//             // {
//             //     test: /\.(png|jpeg|jpg|svg|gif|svg+xml)$/i,
//             //     type: 'asset/resource',                
//             //     use: ["file-loader"]
//             // }
//         ]
//     },
//     devServer: {
//         contentBase: 'build',
//         open: true,
//     }
// };

const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        environment: { arrowFunction: false }
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env']
                    },
                },
                //  исключаем из бандла
                exclude: /node_modules/,
            }
        ]
    }
};