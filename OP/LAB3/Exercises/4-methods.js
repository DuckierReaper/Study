'use strict';
const X = {
    m1: (x) => [x],
    m2(x, y) {
        return [x, y];
    },
    m3(x, y, z) {
        return [x, y, z];
    },
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

