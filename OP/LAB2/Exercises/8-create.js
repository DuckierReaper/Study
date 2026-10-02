'use strict';

/* Implement function `createUser` with signature
  `createUser(name: string, city: string): object`.
  Example: `createUser('Marcus Aurelius', 'Roma')`
  will return object `{ name: 'Marcus Aurelius', city: 'Roma' }` */

const createUser = (name, city) => {
    if (typeof name === 'string' && typeof city === 'string') {
        return {name, city};
    }
    return 'Objects must be words'
};

console.log(createUser('Oleksii', 'Sambir'));

module.exports = { createUser };
