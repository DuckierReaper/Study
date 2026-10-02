'use strict';

/* Call function from function in loop
- Implement function `average` with signature
  `average(a: number, b: number): number`
  calculating average (arithmetic mean).
- Implement function `square` with signature
  `square(x: number): number` calculating square of x.
- Implement function `cube` with signature
  `cube(x: number): number` calculating cube of x.
- Call `square` and `cube` in loop 0 to 9, pass results
  to function `average` on each iteration.
  Add calculation results to array and return this array
  from function `calculate`.

Call functions `square` and `cube` in loop, then pass their
results to function `average`. Print what `average` returns. */

const square = (X) => X ** 2;

const cube = (X) => X ** 3;

const average = (X, Y) => (X + Y) / 2;

const calculate = (X,Y) => {
    const result = [];
   for (; X <= Y; X++) {
       result.push(average(square(X), cube(X)));
   }
   return result
};

console.log(square(4));

console.log(cube(4));

console.log(average(4, 64));

console.log(calculate(0, 9));


module.exports = { square, cube, average, calculate };
