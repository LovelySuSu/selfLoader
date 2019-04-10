// 没有webpack,用bundler.js做打包
const fs = require('fs')
const parser = require('@babel/parser')
const traverse = require('@babel/traverse').default


const moduleAnalyser = (filename) => {
    const content = fs.readFileSync(filename,'utf-8')
    const ast = parser.parse(content,{
        sourceType: 'module'
    })
    const dependence = []
    traverse(ast,{
        ImportDeclaration({ node }) {
            dependence.push(node.source.value)
        }
    })
    console.log(dependence)
}

moduleAnalyser('./src/index.js')