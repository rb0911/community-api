const path = require('path')
const nodeExternals = require('webpack-node-externals')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { webpack } = require('webpack')

debugger
const webpackconfig = {
    target: 'node',
    entry: {
        server: path.join(__dirname, 'src/index.js')
    },
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, './dist')
    },
    module: {
        rules: [
            {
                test: /|.(js|jsx)/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: [path.join(__dirname, '/node_modules')]
            }
        ]
    },
    externals: [nodeExternals()],
    plugins: [,
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({ //可以创建全局常量，打包时候使用
          'process.env': {
            NODE_ENV: (process.env.NODE_ENV === 'production' || 
            process.env.NODE_ENV === 'prod') ? "'production'" : "'development'"
          }
        })
    ],
    // node: {
    //     console: true,
    //     global: true,
    //     process: true,
    //     Buffer: true,
    //     __filename: true,
    //     __dirname: true,
    //     setImmediate: true,
    //     path: true
    // }
}

// 可以用node 调试webpack
// npx node --inspect-brk ./node_modules/.bin/webpack --progress --config
// chrome 打开： chrome://inspect/#devices
// run ncu -u 差看更新 需要更新的包
// rf node_modules
// npm install
module.exports = webpackconfig