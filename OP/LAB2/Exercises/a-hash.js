'use strict';

/* 10. Implement phone book using hash (also known as `object`).
- Define hash with `key` contains `name` (from previous example) and `value`
contains `phone`.
- Implement function `findPhoneByName` with signature
`findPhoneByName(name: string): string`. Returning phone from hash/object.
Use `hash[key]` to find needed phone. */

const phonebook = {
    MarcusAurelius: '+380445554433',
    Aristotle: '+380445551122',
    Plato: '+380445553344',
    Socrates: '+380445557788',
    Seneca: '+380445559900'
};
const findPhoneByName = (name) => {
    return phonebook[name]
};

console.log(findPhoneByName('Plato'));

console.log(findPhoneByName('Seneca'));

module.exports = { phonebook, findPhoneByName };
