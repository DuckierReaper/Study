'use strict';

const generateKey = (length, possible) => {
    let key = '';
    for(let i = 0; i < length; i++) {
        let rNum = Math.floor(Math.random() * possible.length);
        key += possible[rNum];
    }
    return key;
};



const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(16, characters);
console.log(key)

module.exports = { generateKey };
