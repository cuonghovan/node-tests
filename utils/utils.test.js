const utils = require('./utils');

it('should add 2 number', () => {
    const res = utils.sum(2, 3);
    expect(res).toEqual(5);
});

it ('should square a number', () => {
    const res = utils.square(2);
    expect(res).toEqual(4);
});


it ('should handle async square', (done) => {
    utils.asyncSquare(2, (res) => {
        expect(res).toEqual(4);
        done();
    });
});
