'use strict'

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */
const yell = (aString) => {
    return aString.toUpperCase();
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(yell((hello boy)), 'HELLO BOY')
// End of tests */
