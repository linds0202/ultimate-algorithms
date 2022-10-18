/* CHALLENGE
Given an integer, return an integer that has the reverse ordering of that which was received. 
*/

function reverseString(text) {
    return [...text].reduce((acc, char) => char + acc, '')
}

function reverseInteger(num) {
    let reversedNum = parseInt(reverseString(num.toString()))
    
    return reversedNum * Math.sign(num)
}

module.exports = integerReversal