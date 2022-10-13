/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/



//split / reverse / join
function palindromeChecker(text) {
    return text === text.toLowerCase().split('').reverse().join('')
}

//split / reverse / join arrow function
const palindromeChecker = text => text === text.toLowerCase().split('').reverse().join('')

//looping & comparing
function palindromeChecker(text) {
    let charArr = text.toLowercase().split('')

    return charArr.every((char, i) => char === charArr[charArr.length - i - 1])
}

//only check half 
function palindromeChecker(text) {
    let textLen = text.length
    for(let i = 0; i < textLen / 2; i++) {
        if (text[i] !== text[textLen - i - 1]) {
            return false
        }
    }
    return true
}



module.exports = palindromeChecker;