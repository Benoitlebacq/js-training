'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

const jadenCase = (aString) => {
    let solution = '';
    let myArr = aString.split(' ');
    for (let i = 0 ; i < myArr.length ; i ++) {
    solution = solution + " " + myArr[i].charAt(0).toUpperCase() + myArr[i].slice(1) ;
    
    }
    console.log(solution)
}




// Begin of tests
const assert = require('assert')
assert.strictEqual(JadenCase('hello you are cool'), 'Hello You Are Cool')

// End of tests */
