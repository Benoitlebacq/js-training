'use strict'

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */
const keepFirst = (aString) => {
    return aString.slice(0, 2);    
}
const keepLast = (aString) => {
    return aString.slice(aString.length -2 , aString.length);    
}

const keepFirstLast = (aString) => {
    return aString.slice(2,4);
}
//* Begin of tests
const assert = require('assert')

assert.strictEqual(keepFirst('abcdef'), 'ab')
assert.strictEqual(keepLast('abcdef'), 'ef')
assert.strictEqual(keepFirstLast('abcdef'), 'cd')
/*assert.fail('You must write your own tests')
// End of tests */
