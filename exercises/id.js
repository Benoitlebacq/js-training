'use strict'

/*
 * Create an `id` function that takes one argument and return it
 *
 * @notions Functions
 */

// Your code :
const id =(arg) => arg ;
//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof id, 'function')
assert.strictEqual(id.length, 1)
assert.strictEqual(id(5), 5)
assert.strictEqual(id('pouet'), 'pouet')
assert.strictEqual(id(assert), assert)
// End of tests */
