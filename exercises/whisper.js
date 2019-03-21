'use strict'

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */
const whisper = (aString) => {
    return aString.toLowerCase();
}

//* Begin of tests
const assert = require('assert')
assert.strictEqual(whisper('I Have SomeTHING TO SAY'), 'I HAVE SOMETHING TO SAY')

// End of tests */
