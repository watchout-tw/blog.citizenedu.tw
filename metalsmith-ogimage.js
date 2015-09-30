
var debug = require('debug')('metalsmith-ogimage');

module.exports = plugin;

/**
 * A Metalsmith plugin to extract an excerpt from Markdown files.
 *
 * @param {Object} options
 * @return {Function}
 */

function plugin (options) {
  return function (files, metalsmith, done) {
    setImmediate(done)
    Object.keys(files).forEach(function (file) {
      var ogimage = ''
      var data = files[file]
      var imgRE = /<img [^>]*src="(.*?)"/g
      var r
      while ((r = imgRE.exec(String(data.contents))) !== null) {
        ogimage += '<meta property="og:image" content="' + (r[1].substr(0, 2) === '//' ? 'http:' + r[1] : r[1] ) + "\">\n"
      }
      data.ogimage = ogimage
    })
  }
}
