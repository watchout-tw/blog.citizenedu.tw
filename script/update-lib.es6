import {withPromise} from './helper';

var debug = require('debug')('update:post'),
    superagent = require('superagent');

function getTopics(topics, link, pg) {
    var jsonLink = link + '?page=' + pg;
    debug('get topic json:', jsonLink);
    return superagent
        .get(jsonLink)
        .use(withPromise())
        .end()
        .then((res) => {
            let list = res.body.topic_list;

            // append to array
            topics = (list && list.topics) ? topics.concat(list.topics) : topics;

            return (list && list.more_topics_url) ?
                getTopics(topics, link, ++pg) :
                topics;
        });

}

/* given a json link, it will keep digging topic_list.more_topics_url fields and fetch each posts.
 * @param String link a json API url such as 'http://community.citizenedu.tw/c/9-category.json', without any query string.
 * @return Promise object, 'posts' will be parameter as an Array in its callback function.
 */
export function digTopics(link) {
    return getTopics([], link, 0);
}

export function getColumnInfo(columns, name) {
  debug('get column %s', columns[name].title)
  return superagent
    .get(`${columns[name].link}.json`)
    .use(withPromise())
    .end()
    .then((res) => Object.assign(columns[name], res.body))
}

