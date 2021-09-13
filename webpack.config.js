// const path = require('path');
// const HTMLWebpackPlugin = require('html-webpack-plugin');

// const mode = process.env.NODE_ENV;
// const isDev = mode === 'development';
// const generateFilename = ext => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

// module.exports = {
//     entry: {
//         main: './js/index.js',
//     },
//     output: {
//         filename: generateFilename('js'),
//         path: path.resolve(__dirname, 'build'),
//         clean: true,
//         environment: {
//             arrowFunction: false,
//         }
//     },
//     mode,
//     context: path.resolve(__dirname, 'src'),
//     plugins: [
//         new HTMLWebpackPlugin({
//             template: './index.html'
//         })
//     ],
//     module: {
//         rules: [
//             {
//                 test: /\.js$/i,
//                 exclude: /node_modules/,
//                 use: {
//                     loader: 'babel-loader',
//                     options: {
//                         presets: ['@babel/preset-env']
//                     }
//                 }
//             },
//             {
//                 test: /\.css$/i,
//                 use: ['style-loader', 'css-loader']
//             },
//             {
//                 test: /\.(png|jpg|jpeg|svg|gif)$/i,
//                 use: ['file-loader']
//             },
//             {
//                 test: /\.(woff|woff2)$/i,
//                 use: ['file-loader']
//             }
//         ]
//     },
//     devServer: {
//         static: './build',
//         open: true,
//     }
// };
const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'bundle.[chunkhash].js',
        path: path.resolve(__dirname, 'public'),
        clean: true,
        environment: {
            arrowFunction: false,
        }
    },
    devServer: {
        open: true,
        port: 3000,
        static: './src',
        hot: true,
    },
    plugins: [
        new HTMLPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new HTMLPlugin({
            filename: 'balkony.html',
            template: './src/balkony.html',
        }),
        new HTMLPlugin({
            filename: 'kuhni.html',
            template: './src/kuhni.html',
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                //  исключаем из бандла
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    },
                },
            }
        ]
    }
    // module: {
    //    rules: [
    //      {
    //        test: /\.css$/i,
    //        use: ["css-loader"],
    //      },
    //    ],
    //  },

    //  npm run start
};
