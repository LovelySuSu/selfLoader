// 没有webpack,用bundler.js做打包
const fs = require('fs')

const moduleAnalyser = (filename) => {
    const content = fs.readFileSync(filename,'utf-8')
    console.log(content)
}

moduleAnalyser('./src/index.js')