// 没有webpack,用bundler.js做打包
const fs = require('fs')
const path = require('path')
const parser = require('@babel/parser')
const traverse = require('@babel/traverse').default


const moduleAnalyser = (filename) => {
    const content = fs.readFileSync(filename,'utf-8')
    const ast = parser.parse(content,{
        sourceType: 'module'
    })
    const dependencies = {}
    traverse(ast,{
        ImportDeclaration({ node }) {
            const dirname = path.dirname(filename)
            const newFile = './' + path.join(dirname,node.source.value) // 相对于bundler.js的路径
            dependencies[node.source.value] = newFile
        }
    })
    console.log(dependencies)
}

moduleAnalyser('./src/index.js')