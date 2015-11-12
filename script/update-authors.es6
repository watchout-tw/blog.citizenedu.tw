
var debug = require('debug')('update:author'),
    fs = require('mz/fs'),
    co = require('co'),
    superagent = require('superagent'),
    yaml = require('js-yaml'),
    helper = require('./helper')
var mkdirp = require('mkdirp')

var userURL = 'http://community.citizenedu.tw/users/'

function buildAuthor(windowSize, username) {
  var waitFor = parseInt(Math.random() * 200 * windowSize)
  debug('get author %s, wait for %d', username, waitFor)
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      superagent
        .get(`${userURL}/${username}.json`)
        .use(helper.withPromise())
        .end()
        .then((res) => res.body)
        .then(writeAuthor)
        .then(resolve)
    }, waitFor)
  })
}

function writeAuthor(author) {
  debug('write author %s', author.user.username)
  mkdirp(helper.authorsPath)
  return fs.writeFile(`${helper.authorsPath}/${author.user.username}.html`,
      '---\n'
      + yaml.safeDump({
        title: author.user.name,
        avatar: helper.baseURL + author.user.avatar_template,
        rtemplate: 'AuthorPage'
      })
      + '---\n'
      + author.user.bio_cooked
    )
}

co(function* () {
  var [posts, authors] = yield [helper.postsPath, helper.authorsPath].map(helper.readFiles)
  authors = authors || []

  var authors = yield Object.values(posts)
    .map((p) => p.authorname)
    .filter((u) => !authors[`${u}.html`])
  authors
    .map(buildAuthor.bind(null, authors.length))

  debug('%d author(s) updated', authors.length)
}).catch(debug)
