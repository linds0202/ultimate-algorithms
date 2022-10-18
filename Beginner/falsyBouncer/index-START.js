/*
Given an array, remove all falsy values from the array
and return an array of only truthy values.

E.g  falsyBouncer([1, 0, null, '', 5]) // should return [1,5]
*/

//using for...of
function falsyBouncer(array) {
    let ans = []

    for(el in array) {
        if (el) {
            ans.push(el)
        }
    }

    return ans
}

//using filter
function falsyBouncer(array) {
    return array.filter(el => el === true)
}


module.exports = falsyBouncer