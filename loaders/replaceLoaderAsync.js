const LoaderUtils = require('loader-utils')

module.exports = function (source) {
    const options = LoaderUtils.getOptions(this)
    const callback = this.async()
    setTimeout(() => {
        const result =  source.replace('dingding',options.name)
        callback(null,result)
    },1000)
}