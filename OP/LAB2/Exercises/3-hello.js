'use strict';

// Prepare function to print greeting with single argument
const name1 = 'world'

const hello = (name) => {
    console.log(`Hello ${name}!`)
};

hello(name1)

module.exports = { hello };
