/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/

const vowels = ['a', 'e', 'i', 'o', 'u']

//iterative approach using for...of
function vowelsCounter(text) {
    let count = 0

    for (let char of text.toLowerCase()) {
        if (vowelsCounter.includes(char)) {
            count++
        }
    }
    return count
}

//Regex approach
function vowelsCounter(text) {
    //search for vowels
    let matchingInstances = text.match(/[aeiou]/gi)

    //see if it found anything, else return 0
    if (matchingInstances) {
        return matchingInstances.length
    } else {
        return 0
    }


}



module.exports = vowelsCounter;
