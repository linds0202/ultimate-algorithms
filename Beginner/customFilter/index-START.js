/* CHALLENGE
Return the first element from the given array that passes the test specified by the provided function. Both the array and function are passed into the function as arguments as shown below:
*/

//imperative approach
function arrayFilter(arr, func) {
  for (let el of arr) {
    if(func(el)) {
      return el
    }
  }
  return undefined
}

//using filter
function arrayFilter(arr, func) {
  let ans = arr.filter(func)

  return ans[0] ? ans[0] : undefined
}

//using find
function arrayFilter(arr, func) {
  return arr.find(func)
}





module.exports = capSentence