const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /(node_modules|bower_components|build)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    externals: {
        react: 'react',
        'react-dom': 'react-dom'
    },
    resolve: {
        alias: {
            react: path.resolve(path.join(__dirname, './node_modules/react')),
            'react-dom': path.resolve(path.join(__dirname, './node_modules/react-dom'))
        }
    }
};