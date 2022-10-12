/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/


//iterative solution using hash map
function maxRecurringChar(text) {
    let charMap = {}
    let maxCharVal = 0
    let maxChar = ''


    for (let char of text) {
        if(charMap.hasOwnProperty(char)) {
            charMap[char]++
        } else {
            charMap[char] = 1
        }
    }

    for(let char in charMap) {
        if (charMap[char] > maxCharVal) {
            maxCharVal = charMap[char]
            maxChar = char
        }
    }

    return maxChar
}

//solution using ej6 & arrays
function maxRecurringChar(text) {
    let charMap = {}
    let charArr = []
    let valuesArr = []
    let maxCharVal = 0

    for (let char of text) {
        if (charMap.hasOwnProperty(char)) {
            charMap[char]++
        } else {
            charMap[char] = 1
        }
    }

    charArr = Object.keys(charMap)
    valuesArr = Object.values(charMap)
    maxCharVal = Math.max(...valuesArr)

    return charArr[valuesArr.indexOf(maxCharVal)]
}

module.exports = maxRecurringChar;