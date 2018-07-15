const utils = {
    sum : (a, b) => a + b,
    square: (a) => a*a,
    asyncSquare: (a, callback) => {
        setTimeout(() => {
            callback(a*a);
        }, 1000);
    }
}

module.exports = utils;
