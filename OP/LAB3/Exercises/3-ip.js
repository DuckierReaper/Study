'use strict';

const ipToInt = (ip = '127.0.0.1') => {
  ip = ip.split('.').map(Number);
  let result = 0;
  for (let i = 0; i < ip.length; i++) {
    result += ip[i] << ((ip.length - 1 - i) * 8);
  }
  return result;
};

console.log(ipToInt());

module.exports = { ipToInt };
