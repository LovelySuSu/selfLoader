const path = require('path')
const CopyRightWebpackPlugin = require('./plugins/copyright-wepack-plugin')
module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js'
    },
    plugins: [
        new CopyRightWebpackPlugin({
            name: 'dingding'
        })
    ],
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: '[name].js'
    }
}