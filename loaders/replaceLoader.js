const LoaderUtils = require('loader-utils')

module.exports = function (source) {
    return source.replace('dingsusu','world')
}
