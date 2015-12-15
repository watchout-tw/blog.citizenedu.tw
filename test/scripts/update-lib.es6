import nock from 'nock';
import superagent from 'superagent';
import {expect} from 'chai';
import p0 from '../fake/community/c/9-category-page0.json';
import p1 from '../fake/community/c/9-category-page1.json';
import p2 from '../fake/community/c/9-category-page2.json';
import p3 from '../fake/community/c/9-category-page3.json';
import p4 from '../fake/community/c/9-category-page4.json';

import * as lib from '../../script/update-lib';

beforeEach(() => {
    // for unit test, return fixture json data via nock library
    nock('http://community.citizenedu.tw/')
        .get('/c/9-category.json').query({page: 0}).reply(200, p0)
        .get('/c/9-category.json').query({page: 1}).reply(200, p1)
        .get('/c/9-category.json').query({page: 2}).reply(200, p2)
        .get('/c/9-category.json').query({page: 3}).reply(200, p3)
        .get('/c/9-category.json').query({page: 4}).reply(200, p4);
});


describe('Test http Get', () => {
    context('superagent get data from nock', () => {
        it('Get page 0 json from local data', (done) => {
            return superagent
                .get('http://community.citizenedu.tw/c/9-category.json?page=0')
                .end((err, res) => {
                    expect(res).to.not.equal(null);
                    expect(err).to.equal(null);
                    done();
                });
        });
    });
});

describe('Test update-lib', () => {
    context('digTopics(link)', () => {
        it('get page0 json', (done) => {
            let url = 'http://community.citizenedu.tw/c/9-category.json';
            lib.digTopics(url).then((topics) => {
                expect(topics.length).to.equal(106);
                done();
            }).catch(done);
        });
    });
});

