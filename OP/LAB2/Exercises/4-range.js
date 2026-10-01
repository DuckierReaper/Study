'use strict';

// Implement function `range(start: number, end: number): array` returning
// array with all numbers from the range [15, 30] including endpoints

const range = (start, end) => {
    const result = [];
    for (;start <= end; start++) result.push(start);
    return result;
};

console.log(range(15, 30));

module.exports = { range };
