
var debug = require('debug')('helper'),
    yaml = require('js-yaml'),
    fs = require('mz/fs')

var helper = {
  // read file metadata
  getFileMeta(fn) {
    var meta = fs.readFileSync(fn, 'utf-8').split('---')[1]
    return yaml.safeLoad(meta)
  },

  buildIndex(path) {
    return function (files) {
      var index = {}
      files.forEach(function (fn) {
        index[fn] = helper.getFileMeta(`${path}/${fn}`)
      })
      return index
    }
  },

  // collect index (of metadata) for files in a path
  readFiles(path) {
    return fs.readdir(path)
      .then(helper.buildIndex(path))
      .catch(function (err) { debug(err) })
  }
}

export default Object.assign(require('../app/helper'), helper)
