const utils = require('./utils');

it('should add 2 number', () => {
    const sum = utils.sum(2, 3);
    expect(sum).toEqual(5);
});

it ('should square a number', () => {
    const square = utils.square(2);
    expect(square).toEqual(4);
});
