const head = require('./head');

describe('Head', () => {

    it('Head of [] is ', () => {
        expect(head([])).toEqual(undefined);
    });

    it('Head of [1,2,3] is ', () => {
        expect(head([1,2,3])).toEqual(1);
    });
})