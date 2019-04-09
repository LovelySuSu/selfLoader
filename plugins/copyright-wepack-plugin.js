class CopyrightWebpackPlugin {
    constructor(options) {
        console.log(options)
    }
    // compiler是webpack的实例
    apply(compiler) {
        compiler.hooks.compile.tap('CopyrightWebpackPlugin',() => {
                console.log('compiler')
        })
        compiler.hooks.emit.tapAsync('CopyrightWebpackPlugin',(compilation,cb) => {
            //compilation 本次打包的内容
            debugger
           compilation.assets['copyright.txt'] = {
               source: function () {
                   return 'copyright by ding ding'
               },
               size: function () {
                   return 22
               }
           }
            cb()
        })
    }
}

module.exports = CopyrightWebpackPlugin