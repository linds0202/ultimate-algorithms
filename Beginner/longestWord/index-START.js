/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/


//for lopp
function longestWord(text) {
    let wordArr = text.split(' ')
    let maxLen = 0
    let result = ''

    for(let i = 0; i < wordArr.length; i++) {
        if(wordArr[i].length > maxLen) {
            maxLen = wordArr[i].length
            result = wordArr[i]
        }
    }

    return result
}

//using reduce()
function longestWord(text) {
    let result = text.split(' ').rerduce((maxLenWord, currWord) => {
        if(currWord.length > maxLenWord.length) {
            return currWord
        } else {
            maxLenWord
        }
    }, '')
    return result
}

//using sort() to sort from longest to shortest by length then return the first work in the array (longest)
function longestWord(text) {
    return text.split(' ').sort((a, b) => b.length - a.length)[0]
}

module.exports = longestWord