/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/



//using forEach()
function capSentence(text) {
  let wordsArr = test.toLowerCase().split(' ')
  let capsArr = []

  wordsArr.forEach(word => {
    capsArr.push(word[0].toUpperCase() + word.slice(1))
  })
  return capsArr.join(' ')
}

//using map()
function capSentence(text) {
  let wordsArr = text.toLowerCase().split(' ')
  return wordsArr.map(word => word[0] + word.slice(1)).join(' ')
}

//using map() & replace()
function capSentence(text) {
  let wordsArr = text.toLowerCase().split(' ')
  return wordsArr.map(word => word.replace(word[0], word[0].toUpperCase()))
}




module.exports = capSentence