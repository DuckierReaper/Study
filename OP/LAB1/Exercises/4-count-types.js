'use strict';

const countTypesInArray =[
  true,
  'hello',
  5,
  12,
  -200,
  false,
  false,
  'word',
  0,
  3.14,
  -Infinity,
  NaN,
  '',
  'text',
  null,
  undefined,
  100n,
  { a: 1 },
  {},
  [1, 2, 3],
  []
];

const counts = {number: 0, string: 0, boolean: 0, object: 0, bigint: 0, undefined: 0, other: 0}
for (let X of countTypesInArray) {
  if (typeof X in counts) {counts[typeof X]++}
  else
    counts.other++;
}
console.log(counts)

module.exports = { countTypesInArray };
