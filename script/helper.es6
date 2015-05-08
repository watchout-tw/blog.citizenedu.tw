
var debug = require('debug')('helper'),
    fs = require('mz/fs'),
    yaml = require('js-yaml')

var helper = {
  baseURL: 'http://community.citizenedu.tw/',
  postsPath: __dirname + '/../src/posts',
  columnsPath: __dirname + '/../src/columns',
  authorsPath: __dirname + '/../src/authors',

  // superagent middleware
  withPromise() {
    return function (req) {
      req.end = function () {
        return new Promise(function (resolve, reject) {
          Object.getPrototypeOf(req).end.call(req, function (err, res) {
            if (err) { reject(err) }
            if (!res.ok) { reject(res.text) }
            resolve(res)
          })
        })
      }
    }
  },

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

export default helper
