'use strict';

const ipToInt = (ip = '127.0.0.1') => {
  ip = ip.split('.').map(Number);
  console.log(ip);
  for (let i = 0; i < 3; i++) ip[0] <<= 8;
  for (let i = 0; i < 2; i++) ip[1] <<= 8;
  for (let i = 0; i < 1; i++) ip[2] <<= 8;
  for (let i = 0; i < 0; i++) ip[3] <<= 8;
  console.log(ip);
  let result = 0;
  for (const num of ip) result += num;
  return result;
};

console.log(ipToInt());

module.exports = { ipToInt };
