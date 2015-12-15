import {expect} from 'chai';

before(() => {
    //console.log('before hook');
});

after(() => {
    //console.log('after hook');
});

describe('Dummy test helper', () => {
    context('dummy()', () => {
        it('empty test case', () => {
            expect(true).to.equal(true);
        });
    });
});

