/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/


//chain together built-in methods
function reverseString(text) {
    return text.split('').rerverse().join('')
}

//EJ6 arrow function version with spread operator
const reverseString = text => [...text].reverse().join('')

//for loop running from end fo string
function reverseString(text) {
    let reversed = ''

    for (let i = text.length - 1; i >= 0; i--) {
        reversed += text[i]
    }

    return reversed
}

//Use EJ6 for...of loop
function reverseString(text) {
    let reversed = ''

    for (let char of text) {
        reversed = char + reversed
    }

    return reversed
}

//recursive solution using substr
function reverseString(text) {
    if (text === "") {
        return ""
    } else return reverseString(text.substr(1)) + text[0] //substring sends the string minus the first character which it holds to append at the end of the word, reversing the string after the recursion is done
}

//using reduce()
function reverseString(text) {
    return [...text].reduce((acc, char) => char + acc, '')
}

module.exports = reverseString