
var debug = require('debug')('update:author'),
    fs = require('mz/fs'),
    co = require('co'),
    superagent = require('superagent'),
    yaml = require('js-yaml'),
    helper = require('../app/helper')

var userURL = 'http://community.citizenedu.tw/users/'

function buildAuthor(username) {
  debug('get author %s', username)
  return superagent
    .get(`${userURL}/${username}.json`)
    .use(helper.withPromise())
    .end()
    .then((res) => res.body)
    .then(writeAuthor)
}

function writeAuthor(author) {
  debug('write author %s', author.user.username)
  return fs.writeFile(`${helper.authorsPath}/${author.user.username}.html`,
      '---\n'
      + yaml.safeDump({
        title: author.user.name,
        avatar: helper.baseURL + author.user.avatar_template.substr(1),
        rtemplate: 'AuthorPage'
      })
      + '---\n'
      + author.user.bio_cooked
    )
}

co(function* () {
  var [posts, authors] = yield [helper.postsPath, helper.authorsPath].map(helper.readFiles)

  var r = yield Object.values(posts)
    .map((p) => p.authorname)
    .filter((u) => !authors[`${u}.html`])
    .map(buildAuthor)

  debug('%d author(s) updated', r.length)
}).catch(debug)
