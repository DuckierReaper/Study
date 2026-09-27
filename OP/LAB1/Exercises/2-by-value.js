'use strict';
const A = 26

const inc = (x) => {
    return x + 41;
};

const B = inc(A);
console.log(A,B);

module.exports = { inc };
