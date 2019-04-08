const LoaderUtils = require('loader-utils')

module.exports = function (source) {
    const options = LoaderUtils.getOptions(this)
    const result =  source.replace('dingding',options.name)
    this.callback(null,result)
}