
var debug = require('debug')('update:post'),
    fs = require('mz/fs'),
    co = require('co'),
    superagent = require('superagent'),
    yaml = require('js-yaml'),
    helper = require('./helper'),
    argv = require('minimist')(process.argv.slice(2));

function getColumnInfo(columns, name) {
  debug('get column %s', columns[name].title)
  return superagent
    .get(`${columns[name].link}.json`)
    .use(helper.withPromise())
    .end()
    .then((res) => Object.assign(columns[name], res.body))
}

function extractTopics(posts, column) {
  debug('check column %s for new topics', column.title)
  return column.topic_list.topics
    .filter((t) => !t.pinned)
    .filter((t) => !posts[`${t.id}.html`])
    // XXX topic data doesn't have primary category/column id
    .map((t) => Object.assign(t, { column_title: column.title }))
}

function extractMeta() {
  return function (topic) {
    var post = topic.post_stream.posts[0]
    var metaRE = /^<pre><code>([\s\S]*?)<\/code><\/pre>\n\n/
    var meta = {
      "分類": "tags",
      "圖片": "picture",
    }
    topic.tags = []
    topic.picture = ""
    var r = post.cooked.match(metaRE)
    if (null !== r) {
      r[1].split('\n')
        .map((line) => line.split(/(?:：)\s*/))
        .forEach(function ([name, value]) {
          if (meta[name]) {
            topic[meta[name]] = value.split(/(?:,|，|、)\s*/)
            if (topic[meta[name]].length === 1) {
              topic[meta[name]] = topic[meta[name]][0]
            }
            debug('found %s %s', meta[name], topic[meta[name]])
          }
        })
      post.cooked = post.cooked.replace(metaRE, '')
    } else {
      debug('no meta found')
    }
    return topic
  }
}

function buildTopic(topicInfo) {
  debug('get topic %s of %s', topicInfo.id, topicInfo.column_title)
  return superagent
    .get(helper.topicURL(topicInfo.id, {json: true}))
    .use(helper.withPromise())
    .end()
    .then((res) => res.body)
    .then(extractMeta())
    .then(writePost.bind(null, topicInfo))
}

function writePost(topicInfo, topic) {
  debug('write topic %s (%s)', topic.id, topic.title)
  if (topic.picture) topic.picture = topic.picture.split(/src="(.*?)"/)[1]
  if (topic.picture && topic.picture.substr(0, 4) !== "http") {
    topic.picture = helper.baseURL + topic.picture
  }
  // alright, we are using Discourse topic ID as Blog post ID...
  return fs.writeFile(`${helper.postsPath}/${topic.id}.html`,
      '---\n'
      + yaml.safeDump({
        title: topic.title,
        created_at: topic.created_at.replace(/T.*/, ''),
        modified_at: topic.post_stream.posts[0].updated_at.replace(/T.*/, ''),
        author: topic.post_stream.posts[0].name,
        authorname: topic.post_stream.posts[0].username,
        avatar: helper.baseURL + topic.post_stream.posts[0].avatar_template,
        rtemplate: 'ArticlePage',
        collection: [topicInfo.column_title].concat(topic.tags).concat(['posts']),
        picture: topic.picture
      })
      + '---\n'
      + topic.post_stream.posts[0].cooked
    )
}

co(function* () {
  var [posts, columns] = yield [helper.postsPath, helper.columnsPath].map(helper.readFiles)

  if (argv.f) posts = []

  yield Object.keys(columns)
    .filter((n) => (undefined !== columns[n].link && columns[n].link))
    .map(getColumnInfo.bind(null, columns))

  var r = yield Object.values(columns)
    .filter((c) => undefined !== c.topic_list && c.topic_list.topics)
    .map(extractTopics.bind(null, posts))
    .reduce((prev, cur) => prev.concat(cur))
    .map(buildTopic)

  debug('%d topic(s) updated', r.length)
}).catch(debug)
