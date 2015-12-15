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

/**
 * For a given Column data-structure, use its 'link' attribute to dig corresponding json data. To fetch each of posts and assign back to the column data-structure respectively.
 */
export function getColumnInfo(columns, name) {
  debug('get column %s', columns[name].title)
  return digTopics(`${columns[name].link}.json`)
    .then((posts) => {
        // to keep original code logic, we just assign downloaded Post data into
        // original column data strcture.
        columns[name].topic_list = {
            topics: posts
        };
    });
}

