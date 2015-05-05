
var debug = require('debug')('update:post'),
    fs = require('mz/fs'),
    co = require('co'),
    superagent = require('superagent'),
    yaml = require('js-yaml')

// superagent middleware
function withPromise() {
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
}

var topicURL = 'http://community.citizenedu.tw/t'
var postsPath = __dirname + '/../src/posts'
var columnsPath = __dirname + '/../src/columns'

function getFileMeta(fn) {
  var meta = fs.readFileSync(fn, 'utf-8').split('---')[1]
  return yaml.safeLoad(meta)
}

function buildIndex(path) {
  return function (files) {
    var index = {}
    files.forEach(function (fn) {
      index[fn] = getFileMeta(`${path}/${fn}`)
    })
    return index
  }
}

function readFiles(path) {
  return fs.readdir(path)
    .then(buildIndex(path))
    .catch(function (err) { debug(err) })
}

function getColumnInfo(columns, name) {
  debug('get column %s', columns[name].title)
  return superagent
    .get(`${columns[name].link}.json`)
    .use(withPromise())
    .end()
    .then((res) => Object.assign(columns[name], res.body))
    .catch(function (err) { console.error(err) })
}

function extractTopics(posts, column) {
  debug('check column %s for new topics', column.title)
  return column.topic_list.topics
    .filter((t) => !t.pinned)
    .filter((t) => !posts[`${t.id}.html`])
    // XXX topic data doesn't have primary category/column id
    .map((t) => Object.assign(t, { column_title: column.title }))
}

function buildTopic(topicInfo) {
  debug('get topic %s of %s', topicInfo.id, topicInfo.column_title)
  return superagent
    .get(`${topicURL}/${topicInfo.id}.json`)
    .use(withPromise())
    .end()
    .catch(function (err) { debug(err) })
    .then((res) => res.body)
    .then(writePost.bind(null, topicInfo))
}

function writePost(topicInfo, topic) {
  debug('write topic %s (%s)', topic.id, topic.title)
  // alright, we are using Discourse topic ID as Blog post ID...
  return fs.writeFile(`${postsPath}/${topic.id}.html`,
`---
title: "${topic.title}"
created_at: ${topic.created_at.replace(/T.*/, '')}
modified_at: ${topic.post_stream.posts[0].updated_at.replace(/T.*/, '')}
author: ${topic.post_stream.posts[0].name}
rtemplate: ArticlePage
collection: ['${topicInfo.column_title}', '哲學', 'posts']
---
${topic.post_stream.posts[0].cooked}
`)
}

co(function* () {
  var [posts, columns] = yield [postsPath, columnsPath].map(readFiles)

  yield Object.keys(columns)
    .filter((n) => (undefined !== columns[n].link && columns[n].link))
    .map(getColumnInfo.bind(null, columns))

  var r = yield Object.values(columns)
    .filter((c) => undefined !== c.topic_list && c.topic_list.topics)
    .map(extractTopics.bind(null, posts))
    .reduce((prev, cur) => prev.concat(cur))
    .map(buildTopic)

  debug('%d topics updated', r.length)
})
