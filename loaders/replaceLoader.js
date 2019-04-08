module.exports = function (source) {
    console.log(this.query)
    return source.replace('dingding',this.query.name)
}