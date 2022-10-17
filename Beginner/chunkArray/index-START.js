/* 
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g  mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/

//using looping
function chunkArray(array, size) {
    let result = []

    for (value of array) {
        let lastArr = result[result.length - 1]
        if(!lastArr || lastArr.length === size) {
            result.push([value])
        } else {
            lastArr.push([value])
        }
    }

    return result
}

//using splice()
function chunkArray(array, size) {
    let result = []

    let arrCopy = [...array]

    while(arrCopy.length > 0) {
        result.push(arrCopy.splice(0, size))
    }

    return result
}

//using for loop & slice **FASTEST
function chunkArray(array, size) {
    let result = []

    for (let i = 0; i < array.length; i += size) {
        let chunk = array.slice(i, i + size)
        result.push(chunk)
    }

    return result
}

//using recursion
function chunkArray(array, size) {
    if (array.length <= size) {
        return [array]
    } else {
        return [array.slice(0, size), ...chunkArray(array.slice(size), size)]
    }
}

module.exports = chunkArray