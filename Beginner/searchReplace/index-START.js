
//using replace - check for capitalization 1st, then replace in string
function searchReplace(str, word, newWord) {
    if (word[0] === word[0].toUpperCase()) {
        newWord = word[0].toUppercase() + newWord.slice(1)
    }

    return str.replace(word, newWord)
}