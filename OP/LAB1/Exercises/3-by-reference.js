'use strict';
const numbers = {num: 5}

const inc = (obj) => {
  if (typeof obj === 'object') obj.num++  ;
  console.log(obj);
};

inc(numbers);

module.exports = { inc };
