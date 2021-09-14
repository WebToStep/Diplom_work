const path = require('path');

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'bundle.js',
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
};
