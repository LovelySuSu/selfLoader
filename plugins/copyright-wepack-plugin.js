class CopyrightWebpackPlugin {
    constructor(options) {
        console.log(options)
    }
    // compiler是webpack的实例
    apply(compiler) {
        compiler.hooks.emit.tapAsync('CopyrightWebpackPlugin',(compilation,cb) => {
            //compilation 本次打包的内容
            console.log('打包完成')
            console.log(compilation.assets)
            cb()
        })
    }
}

module.exports = CopyrightWebpackPlugin