'use strict';
const X = {
    m1: (x) => [x],
    m2(x, y) {
        return [x, y];
    },
    m3(x, y, z) {
        return [x, y, z];
    },
    m4: 1234,
    m5: 'Hello world',
    m6: {},
    m7: () => {console.log('Hello world')},
};
const methods = (iface) => {
  const result = [];
  for (const id in iface) {
      const fun = iface[id];
      if (typeof fun === 'function') { result.push([fun.name, fun.length]); }
  }
  return result;
};

console.log(methods(X));

module.exports = { methods };

