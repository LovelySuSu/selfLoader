const LoaderUtils = require('loader-utils')

module.exports = function (source) {
    const options = LoaderUtils.getOptions(this)
    return source.replace('dingding',options.name)
}