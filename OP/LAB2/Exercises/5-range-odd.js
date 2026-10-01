'use strict';

// Implement function `rangeOdd(start: number, end: number)` returning
// array with all odd numbers from the range [15, 30] including endpoints

const rangeOdd = (start, end) => {
    const result = [];
    for (;start <= end; start++) {
        if (start % 2 !== 0) result.push(start); 
    }
    return result;
};

console.log(rangeOdd(15, 30));

module.exports = { rangeOdd };
