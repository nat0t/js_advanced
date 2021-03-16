const path = require('path')

module.exports = {
    entry: '/src/index.js',
    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: 'shop.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    { loader: 'babel-loader' },
                ],
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                ],
            },
        ]
    },
}