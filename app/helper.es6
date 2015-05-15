
var debug = require('debug')('helper')

var helper = {
  postsPath: __dirname + '/../src/posts',
  columnsPath: __dirname + '/../src/columns',
  authorsPath: __dirname + '/../src/authors',

  baseURL: 'http://community.citizenedu.tw',

  topicURL(id) {
    return `http://community.citizenedu.tw/t/${id}.json`
  },

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
}

export default helper
