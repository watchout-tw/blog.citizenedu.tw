
var debug = require('debug')('metalsmith-ogimage');

module.exports = plugin;

/**
 * A Metalsmith plugin to extract an excerpt from Markdown files.
 *
 * @param {Object} options
 * @return {Function}
 */

function plugin (options) {
  options = options || {}
  var mapper = options.mapper || function (url) {
    return url.replace(/^(https:)?(\/\/)/, 'http://')
  }
  return function (files, metalsmith, done) {
    Object.keys(files).forEach(function (file) {
      var ogimage = ''
      var data = files[file]
      var imgRE = /<img [^>]*src="(.*?)"/g
      var r
      while ((r = imgRE.exec(String(data.contents))) !== null) {
        ogimage += '<meta property="og:image" content="' + mapper(r[1]) + "\">\n"
      }
      data.ogimage = ogimage
    })
    done()
  }
}
