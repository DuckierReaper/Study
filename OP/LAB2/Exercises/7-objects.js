'use strict';

/* Do following tasks inside function `fn` (see stub: `7-objects.js`)
- Define constant object with single field `name`.
- Define variable object with single field `name`.
- Try to change field `name`.
- Try to assign other object to both identifiers.
- Explain script behaviour. */




const fn = () => {
    const obj1 = {name: 'Oleksii'};
    let obj2 = {name: 'Oleksii'};
    obj1.name = 'Vlad';
    obj2.name = 'Vlad';
    console.log(obj1, obj2);
    // obj1 = {name: 'Oleksii'}
    obj2 = {name: 'Oleksii'}
    console.log(obj1, obj2)
    };

fn();

module.exports = { fn };
