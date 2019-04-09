// 没有webpack,用bundler.js做打包
const fs = require('fs')
const parser = require('@babel/parser')


const moduleAnalyser = (filename) => {
    const content = fs.readFileSync(filename,'utf-8')
    console.log(parser.parse(content,{
        sourceType: 'module'
    }))
}

moduleAnalyser('./src/index.js')