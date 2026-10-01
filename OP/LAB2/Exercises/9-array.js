'use strict';

/* Collections: Array, Hash (Object)

Implement phone book using array of records.
- Define Array of objects with two fields: `name` and `phone`.
Object example: `{ name: 'Marcus Aurelius', phone: '+380445554433' }`.
- Implement function `findPhoneByName` with signature
`findPhoneByName(name: string): string`. Returning phone from that object
where field `name` equals argument `name`. Use `for` loop for this search. */

const phonebook = [
    { name: 'Marcus Aurelius', phone: '+380445554433' },
    { name: 'Aristotle', phone: '+380445551122' },
    { name: 'Plato', phone: '+380445553344' },
    { name: 'Socrates', phone: '+380445557788' },
    { name: 'Seneca', phone: '+380445559900' }
];

const findPhoneByName = (name) => {
    for (const obj of phonebook) {
        if (obj.name === name) return obj.phone
    }
    return 'Wrong name'
};

console.log(findPhoneByName('Plato'));

module.exports = { phonebook, findPhoneByName };
